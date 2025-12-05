# Project Overview

This is a full-stack construction project management platform designed for contractors, builders, and project managers. The application provides comprehensive tools for managing construction projects including tasks, materials, labor tracking, supplier management, and financial oversight.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Wouter for lightweight client-side routing
- TanStack Query for server state management and caching
- Radix UI component library for accessible, customizable UI primitives
- Tailwind CSS for utility-first styling
- Vite as the build tool and development server

**Design Patterns:**
- Component-based architecture with clear separation of concerns
- Custom hooks for shared logic (toast notifications, navigation, theme management)
- Utility libraries for domain-specific logic (color themes, category names)
- Page components that map directly to routes

**State Management:**
- TanStack Query handles all server state (projects, tasks, materials, labor)
- React Context for global UI state (theme, notifications)
- Local component state for UI-specific concerns

### Backend Architecture

**Core Technology Stack:**
- Node.js with Express framework
- TypeScript with ESM modules
- Session-based authentication using Passport
- PostgreSQL database with Drizzle ORM
- esbuild for server compilation

**Design Patterns:**
- RESTful API architecture with resource-based endpoints
- Middleware pipeline for authentication, validation, and error handling
- Database access layer using Drizzle ORM for type-safe queries
- Shared schema definitions between client and server

**Key Architectural Decisions:**
1. **Session-based authentication** - Chosen for simplicity and security over token-based auth; sessions are managed server-side with secure cookies
2. **Drizzle ORM** - Selected for type safety and developer experience; provides compile-time SQL query validation
3. **Shared types** - Common types and schemas live in `/shared` directory, used by both client and server to ensure consistency

### Data Architecture

**Database Schema:**
- **Projects** - Core entity representing construction projects with status, dates, location, and theme preferences
- **Tasks** - Work items linked to projects with categories, assignments, and progress tracking
- **Materials** - Building materials with quantities, costs, suppliers, and project associations
- **Labor** - Worker hours and costs tracked against tasks
- **Contacts** - Suppliers, subcontractors, and other project stakeholders
- **Project Categories** - Flexible, project-specific categorization system with two-tier hierarchy (tier1/tier2)
- **Category Templates** - Global category templates that can be applied to new projects

**Category System:**
- Categories are **project-specific** - each project maintains its own category set
- Two-tier hierarchy: Tier 1 (main categories) and Tier 2 (subcategories)
- Supports multiple preset systems (construction, workout, software development, etc.)
- Color-coded for visual organization
- Stored in `project_categories` table with parent-child relationships

**Preset System:**
- Multiple project presets available (home-builder, standard-construction, workout, software-development)
- Each preset defines default categories and structure for new projects
- Presets can be customized after project creation
- Stored in shared configuration, applied on project initialization

### Theme System

**Color Theme Architecture:**
- Global theme setting that applies across all projects by default
- Per-project theme overrides available
- Multiple theme options: Earth Tone, Pastel, Futuristic, Classic Construction, Molten Core, Neon Noir, Dust Planet, Crystal Cavern, Paper Studio, Velvet Lounge, Paper Bright
- Themes define colors for tier1 and tier2 categories
- Theme data centralized in `lib/theme-system.ts`
- Simple React Context provider for theme access (`SimpleThemeProvider`)
- Backward compatibility layer for legacy theme code

**Design Decision:**
Simplified from complex multi-file theme system to single source of truth. Priority: Global theme → Project override → Default fallback.

### Build and Deployment

**Development Workflow:**
- `npm run dev` - Hot-reload development server on port 5000
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes via Drizzle Kit

**Production Build:**
- `npm run build` - Builds frontend (Vite) and backend (esbuild)
- `npm run start` - Runs production server
- Frontend bundled to static assets, backend compiled to ESM

**Replit Optimization:**
- Special export tool (`export-clean.js`) removes Replit-specific layers
- Creates clean, deployable code without development transformations
- Simplified Vite config available for clean builds

## External Dependencies

### Third-Party Services

**Database:**
- PostgreSQL - Primary data store
- Neon Serverless - PostgreSQL hosting provider for serverless deployments
- Connection managed via Drizzle ORM

**Authentication:**
- Passport.js - Authentication middleware
- express-session - Session management
- bcrypt (implied) - Password hashing

**File Handling:**
- Multer - Multipart/form-data file upload handling

### Key NPM Packages

**Frontend:**
- `@tanstack/react-query` - Server state management
- `@radix-ui/*` - Accessible UI component primitives
- `wouter` - Lightweight routing
- `react-hook-form` + `@hookform/resolvers` - Form management and validation
- `zod` - Schema validation (shared with backend)
- `class-variance-authority` + `clsx` - Conditional CSS class management
- `cmdk` - Command palette component

**Backend:**
- `express` - Web framework
- `drizzle-orm` - Type-safe ORM
- `postgres` - PostgreSQL client
- `cookie-parser` - Cookie parsing middleware
- `dotenv` - Environment variable management

**Build Tools:**
- `vite` - Frontend bundler and dev server
- `esbuild` - Fast JavaScript bundler for backend
- `tsx` - TypeScript execution for Node.js
- `tailwindcss` + `autoprefixer` - CSS processing

### Integration Points

**Webhook Support:**
- n8n integration endpoint for automated material imports
- Endpoint: `POST /api/projects/{projectId}/materials/import-n8n`
- Accepts JSON array of material objects from workflow automation tools

**API Structure:**
- RESTful endpoints under `/api`
- Resource-based routing (projects, tasks, materials, labor, contacts)
- Nested routes for related resources (e.g., `/api/projects/:id/categories`)
- Admin endpoints for template management

### Migration and Data Management

**Database Migrations:**
- Drizzle Kit for schema migrations
- Migration files stored in `/migrations` directory
- Scripts available for data cleanup and template management

**Template System:**
- Task templates stored in database (`task_templates` table)
- Category templates stored globally (`category_templates` table)
- Project-specific categories (`project_categories` table)
- Scripts available for template migration and activation