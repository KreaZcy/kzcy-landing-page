package config

import (
	"os"

	"github.com/KreaZcy/kzcy-config/loader"
)

type Config struct {
	Port              string `json:"port"`
	MongoURI          string `json:"mongo_uri"`
	DBName            string `json:"db_name"`
	SecretKey         string `json:"secret_key"`
	DashboardWhitelist []string `json:"dashboard_whitelist"`
	APIWhitelist      []string `json:"api_whitelist"`
}

var cfg *Config

func Load() *Config {
	if cfg != nil {
		return cfg
	}

	cfg = &Config{
		Port:        getEnv("PORT", "3001"),
		MongoURI:    getEnv("MONGO_URI", "mongodb://localhost:27017"),
		DBName:      getEnv("DB_NAME", "kzcy-landing"),
		SecretKey:   getEnv("SECRET_KEY", "kzcy-landing-secret-change-in-prod"),
	}

	// Use kzcy-config loader for env var overrides
	l := loader.NewLoader("KZCY_LANDING")
	_ = l.Load(cfg)

	// Load IP whitelists from MongoDB after connection
	// (handled separately in main.go)

	return cfg
}

func GetConfig() *Config {
	return cfg
}

func getEnv(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}
