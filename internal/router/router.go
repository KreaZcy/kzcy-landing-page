package router

import (
	"net/http"

	"github.com/KreaZcy/kzcy-landing-page/internal/config"
	"github.com/KreaZcy/kzcy-middleware/cors"
	"github.com/KreaZcy/kzcy-middleware/ipwhitelist"
	"github.com/gin-gonic/gin"
)

func CORSMiddleware() gin.HandlerFunc {
	corsMiddleware := cors.Middleware(cors.DefaultConfig())
	return gin.WrapH(corsMiddleware(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {})))
}

func IPFilterMiddleware(cfg *config.Config, listName string) gin.HandlerFunc {
	var whitelist []string
	if listName == "dashboard" {
		whitelist = cfg.DashboardWhitelist
	} else if listName == "api" {
		whitelist = cfg.APIWhitelist
	}

	// Default to localhost if empty
	if len(whitelist) == 0 {
		whitelist = []string{"127.0.0.1", "::1"}
	}

	ipMiddleware := ipwhitelist.Middleware(ipwhitelist.Config{
		Whitelist:         whitelist,
		TrustForwardHeader: false,
		DeniedHandler:     nil,
	})
	return gin.WrapH(ipMiddleware(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {})))
}
