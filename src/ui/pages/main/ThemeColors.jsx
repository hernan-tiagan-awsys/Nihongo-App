import { useColorModeValue } from "@chakra-ui/react";

// Setting up Object to hold light and dark mode color values for module exportation
//useColorModeValue changes what color to use depending on the color mode light mode (first argument) or dark mode (second argument)
//color values light.### and dark.### are defined inside the Theme.jsx file

function ThemeColors() {
  return {
    body: useColorModeValue("light.100", "dark.100"),
    bg: useColorModeValue("light.200", "dark.200"),
    border: useColorModeValue("light.300", "dark.300"),
    fontColor: useColorModeValue("light.400", "dark.400"),
    success: useColorModeValue("light.500", "dark.500"),
    error: useColorModeValue("light.600", "dark.600"),
    warning: useColorModeValue("light.700", "dark.700"),
    info: useColorModeValue("light.800", "dark.800"),
    hover: useColorModeValue("light.900", "dark.900"),
  };
}

export default ThemeColors;
