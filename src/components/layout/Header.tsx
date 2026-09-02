import { useEffect, useRef, useState, type JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const navigationItems = [
  { href: "/", label: "Home", icon: "⌂" },
  { href: "/ai", label: "AI Lab", icon: "✦" },
  { href: "/work", label: "Projects", icon: "◇" },
  { href: "/experience", label: "Experience", icon: "↗" },
  { href: "/about", label: "About", icon: "☺" },
  { href: "/contact", label: "Contact", icon: "✦" },
] as const;

const themeOptions = [
  { id: "light", label: "Light", icon: "☀" },
  { id: "dark", label: "Dark", icon: "◐" },
  { id: "amber", label: "Amber", icon: "✦" },
  { id: "ocean", label: "Ocean", icon: "≈" },
  { id: "plum", label: "Plum", icon: "☾" },
] as const;

type Theme = (typeof themeOptions)[number]["id"];

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
          aria-label="Mehmood ul Haq, back to home"
        >
          <span className="wordmark-monogram" aria-hidden="true">
            <span className="wordmark-main">MUH</span>
            <span className="wordmark-dot">.</span>
          </span>
          <span className="wordmark-meta">
            <strong>Mehmood ul Haq</strong>
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
                  {item.icon}
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
