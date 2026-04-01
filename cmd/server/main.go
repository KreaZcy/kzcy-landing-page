package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/KreaZcy/kzcy-landing-page/internal/config"
	"github.com/KreaZcy/kzcy-landing-page/internal/handler"
	"github.com/KreaZcy/kzcy-landing-page/internal/router"
	kzcydash "github.com/KreaZcy/kzcy-dashboard"
	"github.com/gin-gonic/gin"
)

func main() {
	cfg := config.Load()

	r := gin.Default()
	r.Use(router.CORSMiddleware())

	// Health check (public)
	r.GET("/health", gin.WrapH(kzcydash.HealthHandler("KreaZcy")))

	// API routes
	api := r.Group("/api/v1")
	{
		// Contact form submission
		api.POST("/contact", handler.ContactHandler)
	}

	// Dashboard/Settings routes (protected by IP whitelist)
	dash := r.Group("/")
	dash.Use(router.IPFilterMiddleware(cfg, "dashboard"))
	{
		// Stats
		dash.GET("/api/v1/stats", handler.StatsHandler)

		// Settings
		dash.GET("/api/v1/settings", handler.GetSettings)
		dash.PUT("/api/v1/settings", handler.UpdateSettings)
	}

	// SPA serving
	SetupSPA(r, cfg)

	// Start server
	addr := ":" + cfg.Port
	srv := &http.Server{
		Addr:    addr,
		Handler: r,
	}

	go func() {
		log.Printf("[KreaZcy] Landing page running on %s", addr)
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Server error: %v", err)
		}
	}()

	// Graceful shutdown
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	log.Println("[KreaZcy] Shutting down server...")

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		log.Printf("Server forced to shutdown: %v", err)
	}

	log.Println("[KreaZcy] Server exited")
}

func SetupSPA(r *gin.Engine, cfg *config.Config) {
	spa := r.Group("/")
	spa.Use(router.IPFilterMiddleware(cfg, "dashboard"))
	{
		distPath := "frontend/dist"
		if _, err := os.Stat(distPath); err == nil {
			r.Static("/assets", distPath+"/assets")
			spaRoutes := []string{"", "about", "services", "contact", "admin"}
			for _, route := range spaRoutes {
				route := route
				spa.GET(route, func(c *gin.Context) {
					c.File(distPath + "/index.html")
				})
			}
		} else {
			spa.GET("/*filepath", func(c *gin.Context) {
				c.Header("Content-Type", "text/html")
				c.String(200, kzcydash.DevModeHTML("KreaZcy", cfg.Port, []string{
					"/api/v1/stats",
					"/api/v1/contact",
				}))
			})
		}
	}
}
