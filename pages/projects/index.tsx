import React from "react";
import { Layout } from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "../../components/flex/flex";

export default () => {
  return (
    <Layout>
      <Flex col center className="relative h-64">
        <h1 className="text-center text-4xl font-bold text-white text-shadow-lg">
          <FontAwesomeIcon icon={faToolbox} className="mr-6" />
          <span>Under construction!</span>
        </h1>
        <h5 className="text-center text-lg font-semibold text-gray-400 text-shadow-sm">
          Checkout the progress on the{" "}
          <a
            className="text-pink-400 hover:text-pink-300 animation"
            href="https://github.com/jackkcc/website"
          >
            repository
          </a>
          .
        </h5>
      </Flex>
    </Layout>
  );
};
