import { Box, Container } from "@chakra-ui/react";
import React from "react";

function LoginFormContainer({ children }) {
  return (
    <Box h="110vh">
      <Container pt="15vh" w={{ base: "98vw", lg: "50vw" }}>
        {children}
      </Container>
    </Box>
  );
}

export default LoginFormContainer;
