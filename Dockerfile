# Runtime stage
FROM alpine:latest

RUN apk --no-cache add ca-certificates wget

WORKDIR /app

# Copy locally built binary
COPY kzcy-landing .

# Create frontend directory
RUN mkdir -p /app/frontend/dist

# Set environment
ENV GIN_MODE=release
ENV PORT=3000

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Run the application
CMD ["./kzcy-landing"]
