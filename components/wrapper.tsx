import React from "react";

export const Wrapper: React.FC = ({ children }) => {
  return <div className="absolute top-0 left-0 w-full h-full">{children}</div>;
};
