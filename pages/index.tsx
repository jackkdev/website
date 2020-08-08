import React from "react";
import { Title } from "../components/title";
import { Nav } from "../components/nav/nav";
import { NavButton } from "../components/nav/nav-button";
import { Container } from "../components/container";
import { Wrapper } from "../components/wrapper";
import { Flex } from "../components/flex/flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxes, faHome } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

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
            <NavButton href="/projects">
              <FontAwesomeIcon icon={faBoxes} className="mr-2" />
              <span>Projects</span>
            </NavButton>
            <NavButton a href="https://discord.gg/V8RzFM4">
              <FontAwesomeIcon icon={faDiscord} className="mr-2" />
              <span>Discord</span>
            </NavButton>
            <NavButton a href="https://github.com/jackkdev">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              <span>GitHub</span>
            </NavButton>
          </Nav>
        </Flex>
      </Container>
    </Wrapper>
  );
};
