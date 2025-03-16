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

## Technology Stack

- **Framework**: Next.js 14.2.24
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Development**: Node.js >=18.0.0

## Getting Started

### Prerequisites

- Node.js >=18.0.0
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/meeeeeooooowwwwwww/natalie-winters.git
cd natalie-winters
```

2. Install dependencies:
```bash
npm install
```

### Development

Run development servers:

All sites:
```bash
npm run dev:all
```

Individual sites:
```bash
npm run main:dev  # Main site on port 3000
npm run biz:dev   # Business site on port 3001
npm run news:dev  # News site on port 3002
```

## Development Workflow

### Branch Structure
- `main`: Production branch
- `natalie-winters-dev`: Development branch
- Feature branches should be created from `natalie-winters-dev`

### Making Changes
1. Create a feature branch from `natalie-winters-dev`
2. Make changes and test locally
3. Commit changes with descriptive messages
4. Push to feature branch
5. Create pull request to `natalie-winters-dev`

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

## Common Issues and Solutions

### Port Already in Use
If you see `EADDRINUSE` errors:
1. Check for running Node.js processes
2. Kill the process using the port
3. Restart the development server

### Shared Component Updates
When updating shared components:
1. Update the component in `src/shared/components`
2. Test across all sites
3. Rebuild all sites if necessary

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved.
