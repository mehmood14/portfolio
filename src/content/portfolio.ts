export type Project = {
  name: string;
  company: string;
  kind: string;
  summary: string;
  contribution: string;
  approach: string;
  outcome: string;
  technologies: readonly string[];
  number: string;
  details: {
    overview: string;
    responsibilities: readonly string[];
    challenges: readonly string[];
    architecture: string;
  };
};

// Replace only the `projects` and `additionalProjects` sections in data.ts.
// Your existing `experience` and `skills` can remain unchanged.

export const projects: readonly Project[] = [
  {
    number: "01",
    name: "Video analytics investigation",
    company: "Hive Streaming",
    kind: "Enterprise analytics · Angular + GraphQL",
    summary:
      "A diagnostic experience that helps teams move from broad video-performance trends to evidence for a specific event, location, system area, or playback session.",
    contribution:
      "Worked across the Angular investigation flow and NestJS GraphQL services: transforming analytics data, shaping API responses, building visualizations, and debugging production behavior.",
    approach:
      "Preserved diagnostic context through filters and drill-downs, paired server-paginated data with interactive charts and maps, and made empty, partial, and failed states explicit.",
    outcome:
      "A coherent path from trend analysis to system-level and viewer-level evidence, designed for complex operational decisions.",
    technologies: [
      "Angular",
      "TypeScript",
      "NgRx",
      "Apollo GraphQL",
      "NestJS",
      "Highcharts",
    ],
    details: {
      overview:
        "One of the main product areas I worked on at Hive Streaming was an analytics experience for investigating video delivery and playback quality. Users could start with cross-event trends, identify an unusual event, narrow the investigation to a system area or location, and eventually inspect evidence for an individual viewer session.",

      responsibilities: [
        "Built and maintained Angular interfaces for analytics-heavy investigation workflows.",
        "Worked with NgRx Store, Effects, selectors, router state, and reactive data flows.",
        "Connected Angular views to Apollo GraphQL services and transformed backend data for charts, maps, tables, and diagnostic cards.",
        "Worked on NestJS GraphQL resolver and service logic supporting analytics queries.",
        "Implemented event discovery with search, filtering, sorting, pagination, and export-oriented workflows.",
        "Worked on system-level diagnostic views covering delivery, playback, network, endpoint, and audience-related information.",
        "Supported viewer-level investigation flows with detailed session and playback evidence.",
        "Implemented interactive Highcharts visualizations with shared zoom behavior and clear empty states.",
        "Worked with geographic views that allowed users to investigate performance by site and other location contexts.",
        "Debugged production issues across frontend state, GraphQL contracts, data transformation, and backend integration boundaries.",
      ],

      challenges: [
        "Keeping the active investigation context intact while users moved from trends to events, system areas, locations, and viewer-level diagnostics.",
        "Synchronizing filters, date ranges, pagination, chart state, and selected context without stale responses overriding newer user actions.",
        "Distinguishing legitimate no-data results from loading failures, partial responses, permission restrictions, and unavailable analytics.",
        "Handling large event lists and time-series datasets while keeping the interface responsive.",
        "Keeping timezone and event-boundary behavior consistent between backend queries, selectors, visualizations, and exported data.",
        "Maintaining consistent analytical definitions across multiple views so the same metric was not interpreted differently in different parts of the product.",
        "Working with analytics coming from multiple backend sources where individual dependencies could fail independently.",
        "Keeping customer and account scoping explicit when working with a shared GraphQL backend.",
      ],

      architecture:
        "The frontend uses Angular with NgRx for domain state and Apollo for GraphQL communication. User actions flow through domain-specific state and effects into secured GraphQL operations. NestJS resolvers and service layers retrieve and transform analytics from shared backend sources before returning typed responses. The Angular application then presents those responses through event tables, Highcharts visualizations, maps, diagnostic cards, and viewer-level investigation views.",
    },
  },

  {
    number: "02",
    name: "Audience engagement analytics",
    company: "Hive Streaming",
    kind: "Privacy-aware product feature · Full stack",
    summary:
      "An analytics feature that turns event telemetry into understandable engagement reporting, time-series insights, audience distributions, and privacy-conscious geographic views.",
    contribution:
      "Contributed across the Angular interface and GraphQL feature module, including state and data orchestration, visualization work, API contracts, and cross-service enrichment.",
    approach:
      "Handled privacy thresholds and missing data as first-class product states, while coordinating filters, refresh behavior, analytics queries, and long-event visualization performance.",
    outcome:
      "Complex engagement analytics become understandable and actionable without treating sensitive, small-group data as a mere UI concern.",
    technologies: [
      "Angular",
      "NgRx",
      "GraphQL",
      "NestJS",
      "PostgreSQL",
      "Highcharts Maps",
    ],
    details: {
      overview:
        "A secured audience-attentiveness analytics feature that transforms completed event telemetry into an interpretable score, minute-level analytics, audience distributions, and geographic reporting. The feature was designed to help users understand when and where audience engagement changed while keeping privacy-sensitive data handling explicit.",

      responsibilities: [
        "Worked across the Angular frontend and the GraphQL backend feature module.",
        "Built event discovery flows with search, date filters, viewer ranges, sorting, and server-side pagination.",
        "Worked on automatic refresh behavior while preserving the user’s active filters and navigation context.",
        "Implemented analytics presentation for event summaries, engagement scores, and minute-level time-series data.",
        "Built interactive visualizations using Highcharts and geographic views using Highcharts Maps.",
        "Worked on synchronized visualization behavior between related charts.",
        "Implemented UI behavior for completed events, live events, missing analytics, and privacy-restricted results.",
        "Worked on GraphQL contracts for event lists, event overviews, minute-level analytics, and geographic data.",
        "Contributed to backend orchestration between analytics storage and supporting services used to enrich event information.",
        "Worked with typed responses and safe fallback states so missing analytics did not break the entire report.",
      ],

      challenges: [
        "Showing estimated analytics for live events while making it clear that those values were provisional.",
        "Applying anonymity thresholds so very small audience groups did not expose sensitive information.",
        "Ensuring privacy behavior applied consistently across scores, charts, maps, tooltips, and other derived views.",
        "Distinguishing a real score of zero from unavailable data, hidden-for-privacy data, and failed enrichment.",
        "Keeping minute-level charts usable for long-running events with potentially large datasets.",
        "Maintaining consistent event boundaries and timezone handling across analytics queries and visualizations.",
        "Handling cases where supporting services used for event information were temporarily unavailable.",
        "Keeping automatic refresh behavior stable without resetting filters, sorting, or pagination unnecessarily.",
        "Grouping overlapping geographic locations without presenting misleading duplicate information.",
      ],

      architecture:
        "The Angular frontend uses NgRx and Apollo to coordinate discovery filters, event state, analytics queries, and visualization data. The feature is backed by a NestJS GraphQL module that retrieves analytical results from PostgreSQL and coordinates supporting enrichment services where required. Typed GraphQL responses are transformed into event summaries, time-series charts, engagement distributions, and geographic views.",
    },
  },

  {
    number: "03",
    name: "AI email assistant",
    company: "Hypertype",
    kind: "Product platform · React + Chrome extension",
    summary:
      "A React product spanning a web dashboard and Gmail extension for context-aware, editable email assistance grounded in company knowledge and previous communication.",
    contribution:
      "Worked across the dashboard, extension, shared packages, and backend integrations—connecting authentication, knowledge sources, dynamic host-page UI, and streamed responses.",
    approach:
      "Designed for Gmail’s changing DOM, asynchronous source synchronization, cancellation and recovery of streamed content, and clear user control over generated drafts.",
    outcome:
      "AI support is brought directly into the compose workflow while keeping source visibility, editing, style reuse, and feedback central to the experience.",
    technologies: [
      "React",
      "TypeScript",
      "Chrome MV3",
      "Firebase",
      "REST",
      "Server-Sent Events",
    ],
    details: {
      overview:
        "An AI-assisted email product consisting of a React web dashboard and a Chrome extension embedded into Gmail. Users could connect company knowledge sources and generate context-aware replies directly inside their existing email workflow rather than switching to a separate application.",

      responsibilities: [
        "Worked across the React dashboard, Chrome extension, shared packages, and backend integrations.",
        "Built onboarding, account settings, and knowledge-source management flows.",
        "Integrated Firebase Authentication and application data.",
        "Worked with synchronized email history and other knowledge sources used to support generated replies.",
        "Built Chrome extension UI injected into Gmail compose and reply surfaces.",
        "Handled dynamic Gmail DOM behavior using observation and controlled React mounting.",
        "Worked with streamed backend responses using Server-Sent Events.",
        "Implemented user controls around generated replies, including editing, regeneration-related behavior, and inserting content into Gmail.",
        "Worked on source visibility so users could understand what information supported generated replies.",
        "Supported reusable templates and company-style matching workflows.",
        "Worked with feature flags, product analytics, monitoring, and support tooling.",
      ],

      challenges: [
        "Gmail owns the host page and can re-render its DOM at any time, so injected UI had to avoid duplicates and clean up correctly.",
        "Chrome Manifest V3 background workers can be suspended, so important state could not depend entirely on long-lived in-memory processes.",
        "Authentication had to remain coherent across the web dashboard, browser extension, Firebase sessions, and Google authorization.",
        "Knowledge synchronization could take significant time, requiring explicit pending, partial, completed, and failed states.",
        "Streaming AI responses required cancellation and clear handling of partial responses.",
        "Generated content could not overwrite edits users made while a response was still streaming.",
        "Source matching and confidence needed to support low-confidence or no-match scenarios rather than implying every result was equally grounded.",
        "Email content and connected knowledge required careful handling around analytics, monitoring, and support tooling.",
      ],

      architecture:
        "The frontend was organized as a React/Turborepo system containing a web dashboard, Chrome extension, and shared packages. Firebase supported authentication and application data, while REST APIs handled product operations and Server-Sent Events delivered streamed AI responses. The extension used browser APIs and injected React components to integrate directly with Gmail compose surfaces.",
    },
  },

  {
    number: "04",
    name: "Robot & persona control",
    company: "Furhat Robotics",
    kind: "Real-time interface · React + WebSockets",
    summary:
      "A responsive control interface for configuring AI personas and running conversations across cloud and local robot environments.",
    contribution:
      "Worked on the React frontend and the integration-heavy workflows that connect authentication, persona management, robot availability, and live conversation state.",
    approach:
      "Made distributed runtime states legible: resource availability, connection failures, unsaved edits, and real-time updates each receive clear, separate feedback.",
    outcome:
      "A complex set of services is presented as a focused workflow for creating, running, sharing, and managing conversational characters.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "WebSockets",
      "REST APIs",
      "Tailwind CSS",
    ],
    details: {
      overview:
        "A React application for managing conversational AI characters and running them against cloud-hosted or locally connected robot environments. The interface brings persona configuration, authentication, runtime allocation, robot connectivity, live conversation state, and sharing workflows into one product experience.",

      responsibilities: [
        "Built frontend functionality using React and TypeScript.",
        "Worked on authentication and user-profile flows.",
        "Implemented persona creation, editing, validation, duplication, saving, and deletion workflows.",
        "Worked with character configuration including descriptive information, language, voice, and visual behavior.",
        "Integrated the frontend with REST APIs for persona management, users, authentication, sharing, and runtime allocation.",
        "Worked with cloud runtime allocation and local robot connection flows.",
        "Integrated WebSocket communication for dialogue history and real-time speech state.",
        "Built conversation controls for running, stopping, interrupting, pausing, and resuming interactions.",
        "Handled UI states for unavailable runtime services and connection failures.",
        "Worked on sharing workflows and read-only/shared character behavior.",
        "Supported responsive behavior across different application layouts.",
      ],

      challenges: [
        "Coordinating editable persona state with a separate runtime that could independently change state.",
        "Handling cloud resource allocation, renewal, expiration, and release without exposing the underlying complexity to users.",
        "Supporting both cloud-hosted environments and locally connected robots through the same interface.",
        "Keeping WebSocket events from creating stale conversation state after reconnects or user actions.",
        "Representing listening, thinking, paused, stopped, and disconnected states clearly.",
        "Preventing unsaved persona changes from being lost when navigating or starting a conversation.",
        "Handling cases where the robot runtime, simulator, or backend was unavailable independently of the rest of the application.",
        "Keeping shared and sample characters appropriately constrained compared with characters owned by the current user.",
      ],

      architecture:
        "The React frontend communicates with application services through REST APIs for authentication, users, personas, sharing, and runtime allocation. Robot execution uses dedicated runtime endpoints while WebSockets deliver real-time dialogue and speech-status updates. A separate embedded renderer provides the visual character experience, allowing persona editing and robot runtime state to remain distinct.",
    },
  },
];

export type AdditionalProject = {
  company: string;
  name: string;
  description: string;
  technologies: string;
  details: {
    overview: string;
    responsibilities: readonly string[];
    challenges: readonly string[];
  };
};

export const additionalProjects: readonly AdditionalProject[] = [
  {
    company: "Hive Streaming",
    name: "Headless content platform",
    description:
      "Contributed to a structured CMS workflow that separates editorial updates from frontend releases, with role-aware administration and GraphQL content delivery.",
    technologies: "Keystone, TypeScript, PostgreSQL, Prisma, GraphQL",
    details: {
      overview:
        "A headless content-management system built to let authorized editors manage structured portal content independently from frontend release cycles. The consuming product retrieves the content through GraphQL while editorial operations remain behind authenticated administration workflows.",

      responsibilities: [
        "Worked on the CMS codebase and structured content workflow.",
        "Implemented and maintained content schemas and relationships for reusable portal content.",
        "Worked with products, landing-page content, cards, tooltips, and related structured entities.",
        "Supported GraphQL-based delivery of structured content to the consuming frontend.",
        "Worked with role-based editorial access for different levels of content administration.",
        "Integrated enterprise authentication into the editorial workflow.",
        "Worked with PostgreSQL-backed persistence through the CMS data layer.",
        "Contributed to deployment-aware configuration and administration.",
        "Worked within containerized and Kubernetes-based delivery environments.",
      ],

      challenges: [
        "Keeping public content reads separate from authenticated content mutations.",
        "Ensuring CMS relationships remained predictable when related content was changed or removed.",
        "Keeping authorization consistent between identity, session information, UI visibility, and server-side access checks.",
        "Maintaining deterministic ordering for structured content consumed by the public frontend.",
        "Making schema changes safely when the CMS and consuming application could be deployed independently.",
        "Keeping audit-related information and internal editorial details out of publicly consumed content.",
        "Managing rich content safely when rendered by a separate frontend application.",
      ],
    },
  },

  {
    company: "Mercurial Minds",
    name: "Telecom operations portal",
    description:
      "Worked on a legacy Angular application for map-heavy operational workflows, bulk data handling, reporting, and multi-service integrations.",
    technologies: "Angular, RxJS, REST/SOAP, Highcharts, Google Maps",
    details: {
      overview:
        "A role-based telecom operations portal used for location-related workflows, geographic mapping, operational reporting, zone management, audit information, uploads, and exports. The application combined multiple telecom services behind a single Angular interface.",

      responsibilities: [
        "Built and maintained functionality in a legacy Angular application.",
        "Worked with role-aware dashboards and operational navigation.",
        "Implemented charts and reporting views using Highcharts.",
        "Worked with Google Maps for geographic site and zone workflows.",
        "Integrated REST APIs and XML-style external service responses.",
        "Implemented location-request workflows with operator-readable success and failure states.",
        "Worked with searchable and paginated operational tables.",
        "Implemented CSV upload and export workflows.",
        "Worked on zone-management interfaces involving geographic sites and location areas.",
        "Supported bulk mapping workflows with validation and result reporting.",
        "Worked with audit and operational log views.",
      ],

      challenges: [
        "Maintaining and extending a mature Angular application built on an older framework generation.",
        "Handling sensitive subscriber and geographic information within role-aware workflows.",
        "Presenting multiple upstream telecom-service errors in language useful to operators.",
        "Keeping map state, table selections, filters, and geographic assignments synchronized.",
        "Handling large geographic datasets without overwhelming map and table rendering.",
        "Making bulk mapping operations understandable before potentially high-impact changes were applied.",
        "Keeping exported data consistent with the filters and date ranges visible in the application.",
        "Working with both REST and legacy XML-oriented service integrations.",
      ],
    },
  },

  {
    company: "Mercurial Minds",
    name: "Telecom service & campaign platform",
    description:
      "Contributed across a multi-portal Angular and Node.js platform for service configuration, campaign workflows, forms, data integrations, and domain boundaries.",
    technologies: "Angular, Node.js, Express, SQL, REST APIs",
    details: {
      overview:
        "A telecom platform divided into administration, service-management, and campaign-management applications. Together, the portals supported user administration, subscriber data, service configuration, interactive menu structures, campaign workflows, quota, charging-related configuration, and external telecom integrations.",

      responsibilities: [
        "Worked across Angular frontend applications and Node.js/Express backend services.",
        "Built and maintained REST APIs for operational product workflows.",
        "Worked with relational application data using SQL-backed services.",
        "Implemented user and configuration management interfaces.",
        "Worked on subscriber-list and uploaded-data workflows.",
        "Built service-configuration interfaces for short codes and related operational settings.",
        "Worked with hierarchical interactive menu structures.",
        "Implemented campaign creation, editing, scheduling, and status-management workflows.",
        "Worked with campaign dashboards and operational reporting.",
        "Supported application flows around quota and usage-related information.",
        "Contributed to technical planning and task breakdown within a small engineering team.",
        "Worked across multiple application domains while keeping frontend and backend responsibilities aligned.",
      ],

      challenges: [
        "Keeping related configuration consistent across multiple independent portals and APIs.",
        "Modeling hierarchical interactive menus while preventing invalid or unreachable structures.",
        "Handling uploaded subscriber lists with validation, duplicate handling, and clear error reporting.",
        "Keeping scheduled campaign state predictable across creation, pause, resume, and execution workflows.",
        "Representing quota and charging-related states without allowing frontend assumptions to become the source of truth.",
        "Keeping authentication and role checks aligned between frontend navigation and backend API enforcement.",
        "Working with external telecom integrations while keeping network-specific behavior separated from product UI concerns.",
        "Maintaining auditability for operational changes involving users, campaigns, configuration, and subscriber data.",
      ],
    },
  },
];

export const experience = [
  {
    period: "May 2024 — Present",
    role: "Frontend Engineer",
    company: "Hive Streaming",
    description:
      "Building and modernizing enterprise video analytics with Angular and TypeScript. Work spans frontend architecture, reactive state, GraphQL services, rich visualizations, and quality practices.",
  },
  {
    period: "Sep 2023 — Apr 2024",
    role: "Software Engineer",
    company: "Furhat Robotics",
    description:
      "Built a React-based control interface for conversational robots in close collaboration with design, integrating the frontend with an established application and improving release verification.",
  },
  {
    period: "Sep 2022 — May 2024",
    role: "Software Engineer",
    company: "Hypertype",
    description:
      "First in-house engineer, contributing broadly across product development, frontend architecture, cloud services, product analytics, and technical planning.",
  },
  {
    period: "Feb 2021 — Jul 2022",
    role: "Associate Full-Stack Engineer",
    company: "Mercurial Minds",
    description:
      "Led planning for a small engineering team while delivering Angular and Node.js features, REST APIs, data integrations, and predictable frontend state.",
  },
] as const;

export const skills = [
  {
    label: "Core expertise",
    items: [
      "TypeScript",
      "React",
      "Angular",
      "Frontend architecture",
      "Accessible UI",
      "Data visualization",
    ],
  },
  {
    label: "Frequently used",
    items: [
      "Node.js",
      "NestJS",
      "GraphQL",
      "NgRx",
      "REST APIs",
      "Testing with Jest & Cypress",
    ],
  },
  {
    label: "Supporting systems",
    items: [
      "PostgreSQL & SQL",
      "Firebase",
      "Cloud platforms",
      "CI/CD",
      "Storybook",
      "Product analytics",
    ],
  },
] as const;
