import '../tokens.css';
import './Card.css';

export interface CardProps {

  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';

  padding?: 'none' | 'small' | 'medium' | 'large';

  clickable?: boolean;

  disabled?: boolean;

  onClick?: () => void;

  className?: string;

  header?: React.ReactNode;

  footer?: React.ReactNode;

  media?: React.ReactNode;

  title?: string;

  subtitle?: string;
}


export const Card = ({
  children,
  variant = 'default',
  padding = 'medium',
  clickable = false,
  disabled = false,
  onClick,
  className = '',
  header,
  footer,
  media,
  title,
  subtitle,
  ...props
}: CardProps) => {
  const CardComponent = clickable ? 'button' : 'div';

  return (
    <CardComponent
      className={[
        'consalud-card',
        `consalud-card--${variant}`,
        `consalud-card--padding-${padding}`,
        clickable ? 'consalud-card--clickable' : '',
        disabled ? 'consalud-card--disabled' : '',
        className,
      ].join(' ')}
      onClick={clickable && !disabled ? onClick : undefined}
      disabled={clickable ? disabled : undefined}
      {...props}
    >
      {media && (
        <div className="consalud-card__media">
          {media}
        </div>
      )}

      {header && (
        <div className="consalud-card__header">
          {header}
        </div>
      )}

      <div className="consalud-card__content">
        {(title || subtitle) && (
          <div className="consalud-card__header-text">
            {title && (
              <h3 className="consalud-card__title">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="consalud-card__subtitle">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>

      {footer && (
        <div className="consalud-card__footer">
          {footer}
        </div>
      )}
    </CardComponent>
  );
};