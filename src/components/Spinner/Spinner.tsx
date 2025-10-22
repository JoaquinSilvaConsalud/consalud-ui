import React from "react";
import "../../tokens.css";
import "./Spinner.css";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "light";
  label?: React.ReactNode;
  speedMs?: number;
  className?: string;
  ariaLabel?: string;
  style?: React.CSSProperties;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  variant = "default",
  label,
  speedMs = 2000,
  className = "",
  ariaLabel = "Cargando…",
  style,
}) => {
  return (
    <span
      className={[
        "cs-spinner",
        `cs-spinner--${size}`,
        `cs-spinner--${variant}`,
        className,
      ].join(" ")}
      role="status"
      aria-live="polite"
      aria-label={label ? undefined : ariaLabel}
      style={{ ["--sp-speed" as any]: `${speedMs}ms`, ...style }}
    >
      <svg className="cs-spinner__svg" viewBox="0 0 50 50" aria-hidden="true">
        <circle
          className="cs-spinner__path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="6"
        />
      </svg>
      {label && <span className="cs-spinner__label">{label}</span>}
    </span>
  );
};

export default Spinner;
