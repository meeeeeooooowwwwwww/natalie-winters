# Natalie Winters Multi-Site Project

This repository contains three Next.js sites sharing common components and styles:

1. Main Site (Port 3000) - Primary website
2. Business Directory (Port 3001) - Business listings and search
3. News Site (Port 3002) - News and video content

## Project Structure

```
natalie-winters/
├── package.json              # Root package.json with workspace config
├── src/
│   ├── shared/              # Shared components, styles, and utilities
│   │   ├── components/      # Reusable React components
│   │   ├── styles/         # Global styles and CSS
│   │   ├── layouts/        # Common layout components
│   │   └── utils/          # Shared utility functions
│   └── sites/
│       ├── main-natalie/   # Main site (port 3000)
│       ├── biz-natalie/    # Business site (port 3001)
│       └── news-natalie/   # News site (port 3002)
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development servers:

- All sites:
```bash
npm run dev:all
```

- Individual sites:
```bash
npm run main:dev  # Main site on port 3000
npm run biz:dev   # Business site on port 3001
npm run news:dev  # News site on port 3002
```

## Development

- `main` branch contains production code
- `development` branch for active development
- Create feature branches from `development` for new features

## Shared Resources

- Components in `src/shared/components/` are available to all sites
- Global styles in `src/shared/styles/` apply across all sites
- Common utilities in `src/shared/utils/` can be imported by any site

## Building for Production

Build all sites:
```bash
npm run build:all
```

Or build individual sites:
```bash
npm run main:build
npm run biz:build
npm run news:build
```
