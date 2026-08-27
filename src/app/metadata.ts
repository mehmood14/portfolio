import { useEffect } from "react";

type PageMetadata = {
  description: string;
  title: string;
};

const portfolioTitle = "Mehmood ul Haq — Frontend Engineer";

const pageMetadata: Record<string, PageMetadata> = {
  "/": {
    title: portfolioTitle,
    description:
      "Portfolio of Mehmood ul Haq, a Frontend Engineer building thoughtful, reliable product experiences.",
  },
  "/work": {
    title: `Selected work | ${portfolioTitle}`,
    description:
      "Engineering stories from Mehmood ul Haq, covering product constraints, technical decisions, and reliable delivery.",
  },
  "/experience": {
    title: `Experience | ${portfolioTitle}`,
    description:
      "Professional experience in frontend engineering, product development, and cross-functional delivery.",
  },
  "/about": {
    title: `About | ${portfolioTitle}`,
    description:
      "Learn about Mehmood ul Haq's approach to frontend architecture, product thinking, and dependable engineering.",
  },
  "/contact": {
    title: `Contact | ${portfolioTitle}`,
    description:
      "Get in touch with Mehmood ul Haq about frontend, full-stack, and product-focused engineering opportunities.",
  },
  notFound: {
    title: `Page not found | ${portfolioTitle}`,
    description: "The page you requested could not be found.",
  },
};

function updateMeta(
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
): void {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.content = content;
}

function updateCanonical(url: string): void {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.append(element);
  }

  element.href = url;
}

export function usePageMetadata(pathname: string): void {
  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? pageMetadata.notFound;
    const siteUrl = (
      import.meta.env.VITE_SITE_URL || window.location.origin
    ).replace(/\/$/, "");
    const pageUrl = new URL(pathname, `${siteUrl}/`).toString();
    const imageUrl = new URL(
      "/og-mehmood-ul-haq.png",
      `${siteUrl}/`,
    ).toString();

    document.title = metadata.title;
    updateMeta(
      'meta[name="description"]',
      "name",
      "description",
      metadata.description,
    );
    updateMeta(
      'meta[property="og:title"]',
      "property",
      "og:title",
      metadata.title,
    );
    updateMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      metadata.description,
    );
    updateMeta('meta[property="og:url"]', "property", "og:url", pageUrl);
    updateMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
    updateMeta(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      metadata.title,
    );
    updateMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      metadata.description,
    );
    updateMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);
    updateCanonical(pageUrl);
  }, [pathname]);
}
