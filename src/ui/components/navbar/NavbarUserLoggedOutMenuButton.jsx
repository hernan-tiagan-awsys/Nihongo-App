import { MenuItem } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarUserLoggedOutMenuButton({ children, navigateTo, ...htmlProps }) {
  const navigate = useNavigate();
  return (
    <MenuItem
      bg="transparent"
      onClick={() => {
        navigate(navigateTo);
      }}
      {...htmlProps}
    >
      {children}
    </MenuItem>
  );
}

export default NavbarUserLoggedOutMenuButton;
