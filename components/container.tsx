import React from "react";

export const Container: React.FC = ({ children }) => {
  return <div className="mx-auto container relative h-full">{children}</div>;
};
