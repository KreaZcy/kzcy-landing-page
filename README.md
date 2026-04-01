# KreaZcy Landing Page

Professional landing page for the KreaZcy microservices ecosystem.

## Tech Stack

- **Backend**: Go 1.23 with Gin framework
- **Frontend**: React 18 with TypeScript + Vite
- **Styling**: Tailwind CSS
- **Database**: MongoDB (for contact form submissions, future use)

## Development

### Prerequisites
- Go 1.23+
- Node.js 22+
- Docker & Docker Compose

### Backend Development
```bash
go run ./cmd/server
```

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Build
```bash
# Frontend
cd frontend && npm run build

# Backend
go build -o kzcy-landing ./cmd/server
```

### Docker
```bash
docker compose up -d
```

## Features

- Responsive design with Tailwind CSS
- Contact form with validation
- Services showcase
- About page
- Newsletter signup (TODO)
- Admin dashboard (TODO)

## License

MIT
