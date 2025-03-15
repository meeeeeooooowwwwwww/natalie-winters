# Natalie G Winters Website Network

This repository contains the codebase for nataliegwinters.com and its associated subdomains. The project is structured as a monorepo with shared resources and components that can be used across all domains.

## Domain Structure

### Main Website (nataliegwinters.com)
- **Directory:** `parent-natalie/`
- **Description:** The main website and shared resource hub
- **URL:** https://nataliegwinters.com

### Business Directory (business.nataliegwinters.com)
- **Directory:** `sites/biz-natalie/`
- **Description:** Business directory and listings subdomain
- **URL:** https://business.nataliegwinters.com

### News Portal (news.nataliegwinters.com)
- **Directory:** `sites/news-natalie/`
- **Description:** News and articles subdomain
- **URL:** https://news.nataliegwinters.com

## Repository Structure

```
parent-natalie/                # Root directory (main website)
├── src/                      # Source code directory
│   ├── app/                 # Next.js app directory
│   ├── shared/             # Shared resources
│   │   ├── components/    # Reusable UI components
│   │   ├── layouts/      # Common layout components
│   │   ├── styles/      # Shared styles and themes
│   │   ├── utils/       # Utility functions
│   │   ├── hooks/       # Custom React hooks
│   │   └── api/         # API utilities and connections
│   └── sites/          # Subdomain-specific code
│       ├── biz-natalie/  # Business site specific code
│       └── news-natalie/ # News site specific code
├── public/              # Static assets
└── config/             # Shared configuration files

```

## Shared Resources

The project uses a shared resource architecture where common components and functionality are maintained in the parent project:

- **Layouts:** Common layouts, headers, footers in `src/shared/layouts`
- **Components:** Reusable UI components in `src/shared/components`
- **API Connections:** Shared API utilities in `src/shared/api`
- **Styles:** Global styles and themes in `src/shared/styles`
- **Utils:** Common utility functions in `src/shared/utils`

## Development

### Setting Up the Development Environment

1. Clone this repository
2. Install dependencies in the root directory:
   ```bash
   npm install
   ```
3. Install dependencies for each site:
   ```bash
   cd sites/biz-natalie && npm install
   cd sites/news-natalie && npm install
   ```

### Running the Projects

To run the main website:
```bash
npm run dev
```

To run a subdomain site (e.g., business site):
```bash
cd sites/biz-natalie
npm run dev
```

## Project Configuration

Each subdomain project can:
- Import shared components from the parent
- Override shared components with custom implementations
- Use shared API connections and utilities
- Maintain its own specific components and logic

## Deployment

Each website is configured to deploy to its respective domain/subdomain while sharing the common resources:

1. Main website deploys to nataliegwinters.com
2. Business directory deploys to business.nataliegwinters.com
3. News portal deploys to news.nataliegwinters.com

## Contact

For any questions or issues, please contact the website administrator.
