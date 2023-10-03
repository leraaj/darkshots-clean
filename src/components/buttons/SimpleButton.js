import React from "react";

const SimpleButton = ({
  classes,
  value,
  color,
  label,
  icon,
  onClick,
  type,
  size,
  disabled, // Add the disabled prop
}) => {
  const hasAdditionalClasses = classes != null;
  const hasIcons = icon != null;
  const hasOnclick = onClick != null;
  const hasSize = size != null;
  const hasDisabled = disabled === true;
  return (
    <button
      {...(hasDisabled ? { disabled: true } : {})}
      className={`btn ${
        hasSize ? "btn-" + size : ""
      } btn-${color} d-flex align-items-center text-center gap-1 
      ${hasAdditionalClasses ? classes : ""} `}
      value={value}
      {...(hasOnclick && {
        onClick: onClick,
      })}
      {...(type != null ? { type: type } : {})}
      // Conditionally add the disabled attribute
    >
      {label != null ? <span className="text-center">{label}</span> : null}
      {hasIcons ? icon : null}
    </button>
  );
};

export default SimpleButton;
