# LeSeft Nigeria Limited – Sanity Monorepo Platform

A high-performance corporate web platform and standalone headless CMS built for **LeSeft Nigeria Limited**.

Built with **Sanity Studio v3 (Standalone)** and **Next.js (App Router)** following the official Sanity recommended architecture.

---

## Architecture Overview

```
leseft-nigeria-poc/
├── package.json                 # Monorepo scripts (dev:web, dev:studio, build)
├── studio/                      # Standalone Sanity Studio (Vite, port 3333)
│   ├── sanity.config.ts         # Studio configuration (Project: 5c2yalf2, Dataset: production)
│   ├── sanity.cli.ts            # TypeGen configuration (outputs to ../web/sanity.types.ts)
│   ├── structure.ts             # Desk structure (Singleton Company Profile)
│   └── schemaTypes/
│       ├── index.ts             # Schema registry
│       └── documents/
│           ├── companyProfile.ts # Singleton: name, mission, vision, values, hero
│           ├── project.ts        # Projects: slug, status, location, date, image
│           └── emailDraft.ts     # Email campaigns & drafts: Cloudinary + dispatch
│
└── web/                         # Next.js Corporate Web Application (port 3000)
    ├── .env.local               # NEXT_PUBLIC_SANITY_PROJECT_ID="5c2yalf2"
    ├── src/
    │   ├── app/                 # Corporate website routes (homepage, about, projects, admin)
    │   ├── components/          # Hero, Navbar, Footer, ProjectCard, PortableText
    │   ├── features/            # Feature views and UI modules
    │   ├── lib/                 # Cloudinary helper, email dispatcher, utils
    │   └── sanity/
    │       ├── client.ts        # Resilient Sanity client + fallback dataset
    │       ├── live.ts          # defineLive for real-time live content updates
    │       ├── queries.ts       # Optimized GROQ queries
    │       └── image.ts         # Sanity image URL builder
    └── package.json
```

---

## Quick Start

### 1. Run the Next.js Frontend
```bash
npm run dev:web
# or
cd web && npm run dev
```
Available at: [http://localhost:3000](http://localhost:3000)

### 2. Run Sanity Studio (Standalone)
```bash
npm run dev:studio
# or
cd studio && npm run dev
```
Available at: [http://localhost:3333](http://localhost:3333)

## Deploy the Frontend to Vercel

1. Import this GitHub repository into Vercel and set the project root directory to `web`.
2. Name the Vercel project `leseft-sanity-poc`. The intended URL is
   [https://leseft-sanity-poc.vercel.app/](https://leseft-sanity-poc.vercel.app/); Vercel confirms
   whether the name is available when creating the project.
3. Add the required Sanity variables from `web/.env.example` to the Vercel project environment.
   Keep API tokens server-side; never add them as `NEXT_PUBLIC_` variables.
4. In Sanity Manage, add the production URL and your local development URL to the project's CORS
   origins so live content updates can connect from the frontend.

Vercel detects Next.js automatically when the project root is `web`; the default build command is
`npm run build`.

---

## Sanity Credentials
- **Project ID**: `5c2yalf2`
- **Dataset**: `production`
- **Organization**: `owhrglljm`
- **Manage Dashboard**: [https://www.sanity.io/manage](https://www.sanity.io/manage)
