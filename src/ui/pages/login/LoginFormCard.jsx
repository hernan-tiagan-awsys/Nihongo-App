import { Card } from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../main/ThemeColors";

function LoginFormCard({ children }) {
  const { bg } = ThemeColors();
  return (
    <Card
      bg={bg}
      variant="elevated"
      boxShadow="lg"
      px={{ base: "1.5em", lg: "2.5em" }}
      pt={{ base: "1.5em", lg: "2.5em" }}
    >
      {children}
    </Card>
  );
}

export default LoginFormCard;
