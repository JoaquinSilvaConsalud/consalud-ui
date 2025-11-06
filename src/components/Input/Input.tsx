import React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  invalid?: boolean;
  required?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      size = "medium",
      icon,
      invalid = false,
      required = false,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error) || invalid;

    return (
      <div className={[
        'input-wrapper',
        className
      ].join(' ').trim()}>
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
            {required && <span className="input-required">*</span>}
          </label>
        )}

        <div
          className={[
            "input-container",
            `input-container--${size}`,
            hasError ? "input-container--error" : "",
            props.disabled ? "input-container--disabled" : "",
          ].join(" ")}
        >
          <input
            ref={ref}
            id={inputId}
            className={[
              "input",
              `input--${size}`,
              hasError ? "input--error" : "",
            ].join(" ")}
            aria-invalid={hasError}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            {...props}
          />

          {icon && (
            <div className="input-icon input-icon--end">
              {icon}
            </div>
          )}
        </div>

        {error && (
          <div id={`${inputId}-error`} className="input-error">
            {error}
          </div>
        )}

        {helperText && !error && (
          <div id={`${inputId}-helper`} className="input-helper">
            {helperText}
          </div>
        )}
      </div>
    );
  }
);
