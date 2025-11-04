import "../../tokens.css";
import "./Card.css";

export interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  type?: "default" | "button";
}

export const Card = ({
  children,
  className,
  style,
  type = "default",
  ...props
}: CardProps) => {
  return (
    <div className={`consalud-card consalud-card--${type} ${className || ''}`.trim()} style={style} {...props}>
      {children}
    </div>
  );
};
