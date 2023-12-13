import { Image } from "@chakra-ui/react";
import React from "react";

function NavbarLogo() {
  const navbar_Logo =
    "https://1.bp.blogspot.com/-0wXC6MMwTqs/Xrea7O9QSuI/AAAAAAABY1U/apyEhwKBcTws66j3jFVmQUD0dMvIO7GRwCNcBGAsYHQ/s400/study_school_jugyou_boy.png";

  return (
    <Image
      display={{ base: "none", lg: "inline-block" }}
      boxSize="3em"
      objectFit="cover"
      src={navbar_Logo}
      alt="logo"
    />
  );
}

export default NavbarLogo;
