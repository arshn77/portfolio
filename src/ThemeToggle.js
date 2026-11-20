import { useEffect, useState } from "react";

const root = document.documentElement;
const systemDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

function savedTheme() {
  try {
    const t = localStorage.getItem("theme");
    return t === "light" || t === "dark" ? t : null;
  } catch {
    return null;
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => savedTheme() || (systemDark() ? "dark" : "light")
  );

  // Follow the system setting until the visitor picks a theme themselves.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!savedTheme()) setTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const dark = theme === "dark";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      className={`theme-toggle ${dark ? "is-dark" : ""}`}
      onClick={toggle}
      aria-label="Dark mode"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="tt-knob">
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <mask id="theme-toggle-mask">
          <rect width="24" height="24" fill="white" />
          <circle className="tt-bite" cx="17" cy="7" r="7" fill="black" />
        </mask>
        <g mask="url(#theme-toggle-mask)">
          <circle
            className="tt-core"
            cx="12"
            cy="12"
            r="5"
            fill="currentColor"
          />
        </g>
        <g
          className="tt-rays"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="12" y1="1.5" x2="12" y2="3.5" />
          <line x1="12" y1="20.5" x2="12" y2="22.5" />
          <line x1="1.5" y1="12" x2="3.5" y2="12" />
          <line x1="20.5" y1="12" x2="22.5" y2="12" />
          <line x1="4.6" y1="4.6" x2="6" y2="6" />
          <line x1="18" y1="18" x2="19.4" y2="19.4" />
          <line x1="4.6" y1="19.4" x2="6" y2="18" />
          <line x1="18" y1="6" x2="19.4" y2="4.6" />
        </g>
      </svg>
      </span>
    </button>
  );
}
