import { Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarTitle({ children }) {
  const navigate = useNavigate();
  return (
    <Text
      fontSize={{ base: "1em", lg: "2em" }}
      cursor="pointer"
      onClick={() => {
        navigate("/");
      }}
    >
      {children}
    </Text>
  );
}

export default NavbarTitle;
