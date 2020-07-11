import React from "react";
import { Container } from "./container";
import { Wrapper } from "./wrapper";
import { Nav } from "./nav/nav";
import { NavLink } from "./nav/nav-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBoxes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Flex } from "./flex/flex";

export const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Flex col className="relative h-full">
          <Nav>
            <NavLink href="/">
              <FontAwesomeIcon icon={faHome} className="mr-2 text-pink-400" />
              <span>Home</span>
            </NavLink>
          </Nav>
          <div className="h-full">{children}</div>
        </Flex>
      </Container>
    </Wrapper>
  );
};
