import '../tokens.css';
import './Button.css';

export interface ButtonProps {
  primary?: boolean;
  variant?: 'primary' | 'secondary' | 'inverted';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}


export const Button = ({
  primary = false,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  children,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        'consalud-button',
        `consalud-button--${size}`,
        `consalud-button--${variant}`,
        disabled ? 'consalud-button--disabled' : '',
        loading ? 'consalud-button--loading' : '',
      ].join(' ')}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="consalud-button__spinner" />}
      <span className={loading ? 'consalud-button__text--hidden' : ''}>
        {children}
      </span>
      {icon && (
        <span className="consalud-button__icon">
          {icon}
        </span>
      )}
    </button>
  );
};