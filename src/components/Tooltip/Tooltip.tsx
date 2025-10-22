import React from "react";
import "../../tokens.css";
import "./Tooltip.css";

export interface TooltipProps {
  id?: string;
  className?: string;
  placement?: "left" | "right" | "midle";
  mobilePlacement?: "left" | "right" | "midle";
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  id,
  className = "",
  placement = "left",
  mobilePlacement,
  children,
}) => {
  const rootId = id ?? "tooltip";

  const desktopCls = placement;
  const mobileCls = mobilePlacement
    ? `mobile-${mobilePlacement}`
    : `mobile-${placement}`;

  return (
    <div className="tooltip-component" aria-hidden id={`${rootId}-component`}>
      <div
        id={rootId}
        className={["tooltip-container", desktopCls, mobileCls, className].join(
          " "
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
