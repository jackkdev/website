import React from "react";
import { Layout } from "../components/layout";
import { Title } from "../components/title";
import { Nav } from "../components/nav/nav";
import { NavLink } from "../components/nav/nav-link";
import { Container } from "../components/container";
import { Wrapper } from "../components/wrapper";
import { Flex } from "../components/flex/flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxes, faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default () => {
  return (
    <Wrapper>
      <Container>
        <Flex col center className="h-full relative">
          <Title
            title="welcome to jackk.dev"
            subtitle="i create stuff for people"
          />
          <Nav>
            <NavLink href="/">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              <span>Home</span>
            </NavLink>
            <NavLink href="/">
              <FontAwesomeIcon icon={faBoxes} className="mr-2" />
              <span>Projects</span>
            </NavLink>
            <NavLink a href="https://github.com/jackkcc">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              <span>GitHub</span>
            </NavLink>
          </Nav>
        </Flex>
      </Container>
    </Wrapper>
  );
};
