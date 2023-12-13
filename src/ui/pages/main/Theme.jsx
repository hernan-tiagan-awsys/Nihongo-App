// theme.js
// Configuring charka's theme and or adding costum themes to chakra

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
// 1. import `mode` function
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// Adding global css styles
const styles = {
  global: (props) => ({
    body: {
      color: mode("dark.100", "light.100")(props),
      bg: mode("light.100", "dark.100")(props),
      overflow: "hidden",
    },
  }),
};

//Adding new color variables into chakra's color values
const colors = {
  //Values for dark mode
  dark: {
    100: "#2C3639", //Body
    200: "#3f4e4f", //Background
    300: "#8d9fa5", //Border
    400: "#fafafa", //Font Color
    500: "#2eb873", //Success
    600: "#e83030", //Fail
    700: "#ff8000", //Warning
    800: "#3399ff", //info
    900: "#4f6061", //Hover
  },
  //Values for light mode
  light: {
    100: "#d2d3db", //Body
    200: "#fafafa", //Background
    300: "#2a2a3c", //Border
    400: "#1f1f2d", //Font Color
    500: "#17cf54", //Success
    600: "#ff3333", //Fail
    700: "#ffad33", //Warning
    800: "#33d6ff", //info
    900: "#d9d9d9", //Hover
  },
  app: {},
};

// 4. Extend the theme
const theme = extendTheme({
  styles,
  config,
  colors,
  fonts: {
    body: `'Meiryo', sans-serif`,
  },
});

export default theme;
