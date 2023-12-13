import { Box } from "@chakra-ui/react";

function Side() {
  return (
    <Box display={"flex"} pt={"10%"}>
      {/* <Box display="none" /> */}
      <Box h="5vh" w={"5vw"} bg="blue" display={{ base: "none", md: "block" }} />
      {/* <Box hideBelow="md" /> */}
      <Box  h="5vh" w={"5vw"} bg="red" display={{ base: "block", md: "none" }} />
      {/* <Box hideFrom="md" /> */}
    </Box>
  );
}

export default Side;
