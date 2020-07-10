import React from "react";

export const Nav: React.FC = ({ children }) => {
  return (
    <nav className="text-center py-16">
      <ul>{children}</ul>
    </nav>
  );
};
