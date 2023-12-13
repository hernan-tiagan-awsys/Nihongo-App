import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginFormCardHeader() {
  const navigate = useNavigate();
  return (
    <>
      <Text fontSize="2em">Login</Text>
      <Flex>
        <Text fontSize={{ base: "0.75em", lg: "1em" }} mr="0.25em">
          Don't have an account yet?
        </Text>
        <Link
          fontSize={{ base: "0.75em", lg: "1em" }}
          onClick={() => {
            navigate("/register");
          }}
        >
          Register <ExternalLinkIcon mx="2px" />
        </Link>
      </Flex>
    </>
  );
}

export default LoginFormCardHeader;
