import { ButtonGroup, Stack } from "@chakra-ui/react";
import React from "react";

function NavbarButtonGroupContainer({ children }) {
  return (
    <Stack direction="row" spacing={4} align="center" justify="center">
      <ButtonGroup>{children} </ButtonGroup>
    </Stack>
  );
}

export default NavbarButtonGroupContainer;
