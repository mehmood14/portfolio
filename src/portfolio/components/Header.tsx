import { useEffect, useState, type JSX } from "react";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
] as const;

const themeOptions = [
  { id: "light", label: "Light", icon: "☀️" },
  { id: "dark", label: "Dark", icon: "◐" },
  { id: "amber", label: "Amber", icon: "🔥" },
] as const;

type Theme = (typeof themeOptions)[number]["id"];

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (
    savedTheme === "light" ||
    savedTheme === "dark" ||
    savedTheme === "amber"
  ) {
    return savedTheme;
  }

  return "light";
}

export function Header(): JSX.Element {
  const location = useLocation();

  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [hasScrolled, setHasScrolled] = useState(false);

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

  return (
    <header className={`site-header${hasScrolled ? " is-scrolled" : ""}`}>
      <div className="brand-tools">
        <Link
          className="wordmark"
          to="/"
          aria-label="Mehmood ul Haq, back to home"
        >
          MUH<span>.</span>
        </Link>
      </div>

      <div className="quick-nav">
        <nav aria-label="Main navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              aria-current={
                location.pathname === item.href ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="theme-bar" role="group" aria-label="Choose color theme">
        <span className="theme-bar-label">Appearance</span>

        {themeOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            className="theme-button"
            aria-pressed={theme === option.id}
            onClick={() => setTheme(option.id)}
          >
            <span className="theme-icon" aria-hidden="true">
              {option.icon}
            </span>

            <span className="theme-name">{option.label}</span>
          </button>
        ))}
      </div>
    </header>
  );
}
