import "../../tokens.css";
import "./Card.css";

export interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Card = ({
  children,

  ...props
}: CardProps) => {
  return (
    <div className={`consalud-card ${props.className || ''}`.trim()} {...props}>
      {children}
    </div>
  );
};
