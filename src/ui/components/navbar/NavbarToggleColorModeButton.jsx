import { Button } from "@chakra-ui/react";
import React from "react";

function NavbarToggleColorModeButton({ children, ...htmlProps }) {
  return <Button {...htmlProps}>{children}</Button>;
}

export default NavbarToggleColorModeButton;
