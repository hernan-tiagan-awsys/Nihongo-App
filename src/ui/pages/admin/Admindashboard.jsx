import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  useBoolean,
} from "@chakra-ui/react";
import ChartComp from "../../components/Chart";
import DoughnutChart from "../../components/Doughnut";
import SideBar from "../../components/SideBar";
import MenuComponent from "../../components/MenuComponent";
import ThemeColors from "../main/ThemeColors";

export default function Admindashboard() {
  const [toggle, setToggle] = useBoolean();
  const {  bg, fontColor, body, hover, info } = ThemeColors();
  console.log(toggle);
  const boxStyle = {
    w: "100%",
    h: { base: "8rem", lg: "11rem" },
    shadow: "lg",
  };
  const headStyle = {
    color: "white",
    textAlign: "left",
    p: 3,
    m: 2,
    fontSize: "1.5em",
  };

  return (
    <Box>
      <Flex flexDir={"row"} justifyContent={"center"} overflow={"auto"}>
        <SideBar toggle={toggle} onClick={setToggle.toggle} />
        <Flex
          h={"100vh"}
          w={"100%"}
          marginLeft={toggle ? { base: "0px", xl: "25rem" } : "0px"}
          transition={"800ms"}
          p="5.5rem"
          flexDir={"column"}
        >
          <MenuComponent></MenuComponent> 
          <Heading
            fontWeight="normal"
            mb={4}
            letterSpacing="tight"
            fontSize="2xl"
            mt={{ base: "6rem", md: "2rem" }}
          >
            Welcome,{" "}
            <Flex fontWeight="bold" display="inline-flex">
              Admin Name
            </Flex>
            !
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }}
            gap={6}
            mt="5%"
          >
            <Box sx={boxStyle} bg="#CC7722">
              <Heading sx={headStyle} size="md">
                N1
              </Heading>
            </Box>
            <Box sx={boxStyle} bg="#BE2ED6">
              <Heading sx={headStyle} size="md">
                N2
              </Heading>
            </Box >
            <Box sx={boxStyle} bg="#F01E2C">
              <Heading sx={headStyle} size="md">
                N3
              </Heading>
            </Box>
            <Box sx={boxStyle}bg="#EE7600">
              <Heading sx={headStyle} size="md">
                N4
              </Heading>
            </Box>
            <Box sx={boxStyle} bg="#00CC67">
              <Heading sx={headStyle} size="md">
                N5
              </Heading>
            </Box>
          </Grid>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(3, 1fr)" }}
            gap={10}
            pt={{base:"5rem", lg:"5%"}}
            mb={10}
          >
            <GridItem colSpan={{ base: 1, xl: 2 }} border="2px groove">
              <ChartComp />
            </GridItem>
            <GridItem colSpan={{ base: 1, xl: 1 }} border="2px groove">
              <DoughnutChart />
            </GridItem>
          </Grid>
          <Spacer minH={"3vh"}></Spacer>
        </Flex>
      </Flex>
    </Box>
  );
}
