
export interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  type?: "default" | "button";
  onClick?: () => void;
}

export const Card = ({
  children,
  className,
  style,
  type = "default",
  ...props
}: CardProps) => {
  return (
    <div className={`card card--${type} ${className || ''}`.trim()} style={style} {...props}>
      {children}
    </div>
  );
};
