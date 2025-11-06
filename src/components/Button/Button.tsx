
export interface ButtonProps {
  primary?: boolean;
  variant?: 'primary' | 'secondary' | 'inverted';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}


export const Button = ({
  primary = false,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  children,
  icon,
  onClick,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        'button',
        `button--${size}`,
        `button--${variant}`,
        disabled ? 'button--disabled' : '',
        loading ? 'button--loading' : '',
        className
      ].join(' ').trim()}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="button__spinner" />}
      <span className={loading ? 'button__text--hidden' : ''}>
        {children}
      </span>
      {icon && (
        <span className="button__icon">
          {icon}
        </span>
      )}
    </button>
  );
};