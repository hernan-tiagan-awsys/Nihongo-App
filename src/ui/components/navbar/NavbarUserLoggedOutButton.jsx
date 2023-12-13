import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarUserLoggedOutButton({ navigateTo, children, ...htmlProps }) {
  const navigate = useNavigate();
  return (
    <Button
      size={{ base: "sm", lg: "md" }}
      variant="solid"
      bg="transparent"
      onClick={() => {
        navigate(navigateTo);
      }}
      {...htmlProps}
    >
      {children}
    </Button>
  );
}

export default NavbarUserLoggedOutButton;
