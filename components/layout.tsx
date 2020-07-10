import React from "react";
import { Container } from "./container";
import { Wrapper } from "./wrapper";

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
