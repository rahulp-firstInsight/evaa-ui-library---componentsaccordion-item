import React from "react";
import "./style.scss";

interface Props {
  className: any;
}

export const LayoutSlotsBase = ({ className }: Props): JSX.Element => {
  return (
    <div className={`layout-slots-base ${className}`}>
      <div className="slot-label">
        ◇<br />
        Slot
      </div>
    </div>
  );
};
