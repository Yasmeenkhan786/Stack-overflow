import React from "react";

const Avatar = ({ children, backgroundColor, px, py, color, borderRadius, fontSize, cursor,text }) => {
  const style = {
    backgroundColor,
    color: color || "black",
    padding: `${py} ${px}`,
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration:"none"
  };
  return <div style={style}>{children}</div>;
};
export default Avatar;
