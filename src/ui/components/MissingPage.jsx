import { AbsoluteCenter, Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function MissingPage() {
  return (
    <Box minH="100vh" bg="white">
      <AbsoluteCenter textAlign="center">
        <Heading>SORRY PAGE NOT FOUND</Heading>
        <Image
          m="10"
          objectFit="cover"
          src="https://3.bp.blogspot.com/-67vb6B7qc6E/VMyW9s_OIQI/AAAAAAAAA1g/mnaQUQF4M-Y/s1600/gudetama%2B2.gif"
          alt="logo"
        />
      </AbsoluteCenter>
    </Box>
  );
}

export default MissingPage;
