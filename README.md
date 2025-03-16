# Natalie G. Winters Multi-Site Project

A Next.js-based multi-site project consisting of three interconnected websites:
1. Main Site (nataliegwinters.com)
2. Business Directory (biz.nataliegwinters.com)
3. News Coverage (news.nataliegwinters.com)

## Project Structure

```
src/
├── shared/                 # Shared components and utilities
│   ├── components/        # Reusable React components
│   │   ├── Layout.tsx    # Main layout wrapper
│   │   ├── Navigation.tsx # Site navigation
│   │   └── Footer.tsx    # Site footer
│   └── layouts/          # Root layouts
│       └── RootLayout.tsx # Base HTML structure
│
└── sites/                # Individual site implementations
    ├── main-natalie/     # Main site
    ├── biz-natalie/      # Business directory
    └── news-natalie/     # News coverage
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

2. Install dependencies for all sites:
```bash
cd src/sites/main-natalie && npm install
cd ../biz-natalie && npm install
cd ../news-natalie && npm install
```

### Development

Each site runs on its own port:
- Main site: http://localhost:3000
- Business site: http://localhost:3001
- News site: http://localhost:3002

To start development servers:

1. Main site:
```bash
cd src/sites/main-natalie
npm run dev
```

2. Business site:
```bash
cd src/sites/biz-natalie
npm run dev
```

3. News site:
```bash
cd src/sites/news-natalie
npm run dev
```

## Site-Specific Features

### Main Site (Port 3000)
- Landing page with links to other sections
- Blue color scheme
- Business directory integration
- News coverage integration

### Business Directory (Port 3001)
- Business listings
- Search functionality
- Categories
- Green color scheme

### News Coverage (Port 3002)
- Video content
- News articles
- Categories
- Purple color scheme

## Shared Components

### Layout
The shared Layout component provides:
- Consistent navigation
- Site-specific color schemes
- Footer
- Responsive design

### Navigation
- Site-specific navigation items
- Color-coded based on site
- Mobile-responsive menu
- Active state indicators

### Footer
- Consistent across all sites
- Quick links
- Social media links
- Copyright information

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

### Testing
- Test changes across all three sites
- Verify responsive design
- Check cross-browser compatibility
- Ensure shared components work correctly

## Build and Deployment

### Production Build
For each site:
```bash
npm run build
npm run start
```

### Environment Variables
Required environment variables for each site:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_SITE_DESCRIPTION`

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
