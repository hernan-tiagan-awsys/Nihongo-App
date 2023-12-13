import { MenuItem } from "@chakra-ui/react";
import React from "react";

function NavbarLogoutButton({ children, ...htmlProps }) {
  return <MenuItem {...htmlProps}>{children}</MenuItem>;
}

export default NavbarLogoutButton;
