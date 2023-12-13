//#region Imports
import { Box, Spacer } from "@chakra-ui/react";

import { useUserContext } from "../../../logic/hooks/user/useUserContext";
import NavbarLogo from "./NavbarLogo";
import NavbarTitle from "./NavbarTitle";
import NavbarContainer from "./NavbarContainer";
import NavbarButtonGroupContainer from "./NavbarButtonGroupContainer";
import NavbarUserLoggedInMenu from "./NavbarUserLoggedInMenu";
import NavbarUserLoggedOutMenu from "./NavbarUserLoggedOutMenu";
//#endregion

export default function NavBar() {
  //Retrieves user details
  const { user } = useUserContext();

  return (
    <NavbarContainer>
      <NavbarLogo />
      <NavbarTitle> 日本語・練習用・ツール</NavbarTitle>
      <Spacer />
      <NavbarButtonGroupContainer>
        {user ? <NavbarUserLoggedInMenu /> : <NavbarUserLoggedOutMenu />}
      </NavbarButtonGroupContainer>

      <Box p="4" />
    </NavbarContainer>
  );
}
