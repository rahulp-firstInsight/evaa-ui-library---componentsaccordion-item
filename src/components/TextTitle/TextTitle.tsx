import React from "react";
import "./style.scss";

interface Props {
  title: string;
  fillContainer: boolean;
  iconLeft: boolean;
  iconRight: boolean;
  badge: boolean;
  subtitle: boolean;
  className: any;
  textClassName: any;
}

export const TextTitle = ({
  title = "Text Title",
  fillContainer,
  iconLeft,
  iconRight,
  badge,
  subtitle,
  className,
  textClassName,
}: Props): JSX.Element => {
  return (
    <div className={`text-title ${className}`}>
      <div className={`text ${textClassName}`}>{title}</div>
    </div>
  );
};
