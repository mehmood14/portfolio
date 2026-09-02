import { useEffect, useRef, useState, type JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const navigationItems = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/ai", label: "AI Lab", icon: "spark" },
  { href: "/work", label: "Projects", icon: "code" },
  { href: "/experience", label: "Experience", icon: "briefcase" },
  { href: "/about", label: "About", icon: "profile" },
  { href: "/contact", label: "Contact", icon: "mail" },
] as const;

const themeOptions = [
  { id: "light", label: "Light", icon: "☀" },
  { id: "dark", label: "Dark", icon: "◐" },
  { id: "amber", label: "Amber", icon: "✦" },
  { id: "ocean", label: "Ocean", icon: "≈" },
  { id: "plum", label: "Plum", icon: "☾" },
] as const;

type NavigationIconName = (typeof navigationItems)[number]["icon"];
type Theme = (typeof themeOptions)[number]["id"];

function NavigationIcon({ name }: { name: NavigationIconName }): JSX.Element {
  const svgProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "home":
      return (
        <svg {...svgProps}>
          <title>Home</title>
          <path d="m4 10 8-6 8 6v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
          <path d="M9.5 20v-5h5v5" />
        </svg>
      );
    case "spark":
      return (
        <svg {...svgProps}>
          <title>AI Lab</title>
          <path d="m12 3 .9 4.1L17 8l-4.1.9L12 13l-.9-4.1L7 8l4.1-.9Z" />
          <path d="m18.5 14 .45 2.05L21 16.5l-2.05.45L18.5 19l-.45-2.05L16 16.5l2.05-.45Z" />
        </svg>
      );
    case "code":
      return (
        <svg {...svgProps}>
          <title>Projects</title>
          <path d="m8.5 7-4 5 4 5M15.5 7l4 5-4 5M13.5 4.5l-3 15" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...svgProps}>
          <title>Experience</title>
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 11h18M10 11v2h4v-2" />
        </svg>
      );
    case "profile":
      return (
        <svg {...svgProps}>
          <title>About</title>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20a7 7 0 0 1 14 0" />
        </svg>
      );
    case "mail":
      return (
        <svg {...svgProps}>
          <title>Contact</title>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
  }
}

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem("portfolio-theme");
  return themeOptions.find((option) => option.id === savedTheme)?.id ?? "light";
}

export function Header(): JSX.Element {
  const location = useLocation();

  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const themePickerRef = useRef<HTMLDivElement>(null);
  const themeTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateHeader = () => {
      setHasScrolled(window.scrollY > 12);
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  useEffect(() => {
    if (!themeMenuOpen) {
      return;
    }

    const closeThemeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setThemeMenuOpen(false);
        themeTriggerRef.current?.focus();
      }
    };

    const closeOnOutsidePress = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !themePickerRef.current?.contains(event.target)
      ) {
        setThemeMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeThemeMenu);
    document.addEventListener("pointerdown", closeOnOutsidePress);

    return () => {
      window.removeEventListener("keydown", closeThemeMenu);
      document.removeEventListener("pointerdown", closeOnOutsidePress);
    };
  }, [themeMenuOpen]);

  const currentTheme =
    themeOptions.find((option) => option.id === theme) ?? themeOptions[0];

  return (
    <header className={`site-header${hasScrolled ? " is-scrolled" : ""}`}>
      <div className="header-shell">
        <Link
          className="wordmark"
          to="/"
          aria-label="Mehmood Ul Haq, back to home"
        >
          <span className="wordmark-monogram" aria-hidden="true">
            <span className="wordmark-main">MUH</span>
            <span className="wordmark-dot">.</span>
          </span>
          <span className="wordmark-meta">
            <strong>Mehmood Ul Haq</strong>
          </span>
        </Link>

        <nav className="quick-nav" aria-label="Main navigation">
          {navigationItems.map((item) => {
            const isActive =
              item.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                to={item.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="nav-icon" aria-hidden="true">
                  <NavigationIcon name={item.icon} />
                </span>

                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div ref={themePickerRef} className="theme-picker">
          <button
            ref={themeTriggerRef}
            type="button"
            className="theme-trigger"
            aria-label={`Current theme: ${currentTheme.label}. Choose a theme`}
            aria-expanded={themeMenuOpen}
            onClick={() => setThemeMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{currentTheme.icon}</span>
            <span className="theme-trigger-label">Theme</span>
          </button>

          {themeMenuOpen && (
            <div className="theme-menu">
              {themeOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`theme-option theme-option--${option.id}${
                    theme === option.id ? " is-active" : ""
                  }`}
                  onClick={() => {
                    setTheme(option.id);
                    setThemeMenuOpen(false);
                  }}
                >
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
