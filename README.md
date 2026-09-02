# Mehmood Ul Haq — Portfolio

A React, TypeScript, and Vite portfolio featuring selected product work, career experience, and an AI Lab for engineering-focused agents.

**Live site:** [https://mehmoodulhaq.vercel.app/](https://https://mehmoodulhaq.vercel.app//)

## Highlights

- Responsive portfolio pages for work, experience, about, and contact.
- A shared visual system with theme support, accessible navigation, and route metadata.
- An **AI Lab** with purpose-built engineering agents.
- An **AI Engineering Investigator** that streams an incident investigation, correlating simulated deployments, metrics, and logs with real GitHub repository analysis.

## Tech stack

- React 19 and TypeScript
- Vite
- React Router
- CSS with shared design tokens and responsive styles
- Biome and Prettier
- Vercel Speed Insights

## Local development

Install dependencies and start the portfolio:

```bash
npm install
npm run dev
```

The development server is normally available at `http://localhost:5173`.

### AI Engineering Investigator

The investigator page requires its local API to be running separately. Create a `.env` file at the project root:

```bash
VITE_API_URL=http://localhost:3001
```

Then run the investigator backend on that address. The page sends a `POST` request to:

```text
${VITE_API_URL}/api/investigations/stream
```

The request body is:

```json
{
  "repository": "mehmood14/ai-engineering-investigator",
  "message": "Investigate why orders-api latency increased after the latest deployment."
}
```

The frontend reads the POST response as an SSE `ReadableStream` using `fetch()`—it does not use `EventSource`. The backend can send tool progress events followed by the completed investigation result:

```ts
type InvestigationResult = {
  summary: string;
  probableCause: string;
  confidence: number;
  evidence: string[];
  recommendations: string[];
};
```

Use either `owner/repository` or a full GitHub repository URL in the repository field. Demo telemetry is simulated; GitHub repository analysis uses real repository data.

## Scripts

```bash
npm run dev          # Start the Vite development server
npm run build        # Type-check and create a production build
npm run preview      # Preview the production build locally
npm run lint         # Run Biome linting
npm run format       # Format files with Prettier
npm run format:check # Check formatting with Prettier
```

## Routes

| Route                          | Purpose                               |
| ------------------------------ | ------------------------------------- |
| `/`                            | Home page and portfolio overview      |
| `/ai`                          | AI Lab agent directory                |
| `/ai/engineering-investigator` | Streaming AI Engineering Investigator |
| `/work`                        | Project case studies                  |
| `/experience`                  | Professional experience               |
| `/about`                       | Personal background and values        |
| `/contact`                     | Contact page                          |

## Source structure

```text
src/
├── app/          # Application shell, routes, and metadata
├── components/   # Shared layout and navigation components
├── content/      # Typed portfolio content
├── pages/        # Route-level pages and co-located styles
│   └── ai/       # AI Lab and Engineering Investigator
└── styles/       # Global design tokens and responsive rules
```

## Deployment

Import this repository into Vercel. The default build command (`npm run build`) and output directory (`dist`) are detected automatically. The included `vercel.json` routes client-side paths through the application, including the custom 404 page.

Set these environment variables in Vercel:

- `VITE_SITE_URL` — the final public site URL, used for canonical and social metadata.
- `VITE_API_URL` — the deployed AI investigator API base URL, if the investigator is enabled in production.

Ensure the investigator API accepts requests from the deployed portfolio origin.

## Content and confidentiality

Portfolio content lives in `src/content/portfolio.ts`; routes live in `src/app/App.tsx`; page and component styles are co-located with their source files.
