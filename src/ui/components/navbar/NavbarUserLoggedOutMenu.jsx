import React from "react";
import NavbarUserLoggedOutButton from "./NavbarUserLoggedOutButton";
import ToggleColorModeButtonIcon from "./ToggleColorModeButtonIcon";
import NavbarToggleColorModeButton from "./NavbarToggleColorModeButton";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavbarUserLoggedOutMenuButton from "./NavbarUserLoggedOutMenuButton";
import ThemeColors from "../../pages/main/ThemeColors";

function NavbarUserLoggedOutMenu() {
  const { toggleColorMode } = useColorMode();
  const { bg } = ThemeColors();
  return (
    <HStack>
      {/* //#region Desktop View */}
      <Box display={{ base: "none", lg: "inline-block" }}>
        <NavbarUserLoggedOutButton navigateTo={"/register"}>
          Register
        </NavbarUserLoggedOutButton>
        <NavbarUserLoggedOutButton navigateTo={"/login"}>
          Login
        </NavbarUserLoggedOutButton>
      </Box>
      {/* // #endregion */}

      {/* //#region Mobile View */}
      <Box display={{ base: "inline-block", lg: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            mr="1em"
          />
          <MenuList bg={bg}>
            <NavbarUserLoggedOutMenuButton navigateTo={"/register"}>
              Register
            </NavbarUserLoggedOutMenuButton>
            <NavbarUserLoggedOutMenuButton navigateTo={"/login"}>
              Login
            </NavbarUserLoggedOutMenuButton>
          </MenuList>
        </Menu>
      </Box>
      {/* // #endregion */}

      <NavbarToggleColorModeButton
        data-testid="color-mode-toggle"
        variant="solid"
        bg="transparent"
        onClick={() => {
          toggleColorMode();
        }}
      >
        <ToggleColorModeButtonIcon />
      </NavbarToggleColorModeButton>
    </HStack>
  );
}

export default NavbarUserLoggedOutMenu;
