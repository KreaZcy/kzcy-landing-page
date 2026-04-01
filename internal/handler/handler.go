package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// ContactRequest represents a contact form submission
type ContactRequest struct {
	Name    string `json:"name" binding:"required"`
	Email   string `json:"email" binding:"required,email"`
	Subject string `json:"subject"`
	Message string `json:"message" binding:"required"`
}

// ContactHandler handles contact form submissions
func ContactHandler(c *gin.Context) {
	var req ContactRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// TODO: Store in MongoDB or send email
	// For now, just acknowledge
	c.JSON(http.StatusOK, gin.H{
		"success": true,
		"message": "Thank you for your message! We'll get back to you soon.",
	})
}

// StatsHandler returns landing page statistics
func StatsHandler(c *gin.Context) {
	// TODO: Fetch real stats from database
	c.JSON(http.StatusOK, gin.H{
		"services_count":    7,
		"libraries_count":   10,
		"active_projects":   5,
		"visitors_this_month": 1234,
	})
}

// Settings represents landing page configuration
type Settings struct {
	Tagline        string   `json:"tagline"`
	Description    string   `json:"description"`
	Services       []string `json:"services"`
	SocialLinks    map[string]string `json:"social_links"`
}

var settings = Settings{
	Tagline:     "Building the future of microservices",
	Description: "KreaZcy is a comprehensive ecosystem of microservices, shared libraries, and tools for building scalable applications.",
	Services:    []string{"InterakZcy", "RekogniZcy", "AfiliaZcy", "NotifikaZcy", "ProgreZcy", "EksploraZcy", "AlokaZcy"},
	SocialLinks: map[string]string{
		"github": "https://github.com/KreaZcy",
		"linkedin": "https://linkedin.com/company/kreazcy",
	},
}

// GetSettings returns current settings
func GetSettings(c *gin.Context) {
	c.JSON(http.StatusOK, settings)
}

// UpdateSettings updates landing page settings
func UpdateSettings(c *gin.Context) {
	var req Settings
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	settings = req
	c.JSON(http.StatusOK, gin.H{"success": true})
}
