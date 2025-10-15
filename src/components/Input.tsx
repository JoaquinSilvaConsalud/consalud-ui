import React from 'react';
import '../tokens.css';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  invalid?: boolean;
  required?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  size = 'medium',
  icon,
  invalid = false,
  required = false,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = Boolean(error) || invalid;

  return (
    <div className={`consalud-input-wrapper ${className}`.trim()}>
      {label && (
        <label
          htmlFor={inputId}
          className="consalud-input-label"
        >
          {label}
          {required && <span className="consalud-input-required">*</span>}
        </label>
      )}

      <div className={[
        'consalud-input-container',
        `consalud-input-container--${size}`,
        hasError ? 'consalud-input-container--error' : '',
        props.disabled ? 'consalud-input-container--disabled' : ''
      ].join(' ')}>


        <input
          ref={ref}
          id={inputId}
          className={[
            'consalud-input',
            `consalud-input--${size}`,
            hasError ? 'consalud-input--error' : '',
          ].join(' ')}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${inputId}-error` :
              helperText ? `${inputId}-helper` :
                undefined
          }
          {...props}
        />

        {icon && (
          <div className="consalud-input-icon consalud-input-icon--end">
            {icon}
          </div>
        )}
      </div>

      {error && (
        <div
          id={`${inputId}-error`}
          className="consalud-input-error"
        >
          {error}
        </div>
      )}

      {helperText && !error && (
        <div
          id={`${inputId}-helper`}
          className="consalud-input-helper"
        >
          {helperText}
        </div>
      )}
    </div>
  );
});