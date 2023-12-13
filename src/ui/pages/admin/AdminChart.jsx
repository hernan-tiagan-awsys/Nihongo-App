// import { Chart } from 'react-chartjs-2';
import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Avatar,
  // AvatarGroup,
  Text,
  Icon,
  // IconButton,
  // Table,
  // Thead,
  // Tbody,
  // Tr,
  // Th,
  // Td,
  // Divider,
  // GridItem,
  Grid,
  // Link,
  Box,
} from "@chakra-ui/react";
import {
  FiHome,
  FiPieChart,
  // FiBox,
  // FiCalendar,
  // FiChevronDown,
  // FiChevronUp,
  FiEdit,
  FiBook,
  // FiSearch,
  // FiBell,
  // FiEye,
  // FiDelete,
  // FiTrash,
} from "react-icons/fi";
// import { color } from "framer-motion";
// import Chart from "../../Components/chartComponent/Chart";
// import BarChart from "../../Components/chartComponent/BarChart";
// import DoughnutChart from "../../Components/chartComponent/DoughnutChart";
// import StackedBar from "../../Components/chartComponent/StackedBar";
// import CalendarComponent from "../../Components/chartComponent/Calendar";

export default function AdminChart() {
  // const [display, changeDisplay] = useState("hide");
  const boxStyle = {
    w: "100%",
    h: "100",
    bgColor: "gray.400",
  };
  const headStyle = {
    color: "blackAlpha.900",
    textAlign: "center",
    pt: 3,
  };
  const textStyle = {
    pt: 3,
    textAlign: "center",
  };
  return (
    <Box pt="10vh">
      <Flex
        h={[null, null, "100vh"]}
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        maxW="2000px"
      >
        {" "}
        {/* Column 1 */}
        <Flex
          w="15%"
          flexDir="column"
          alignItems="center"
          backgroundColor="#020202"
          color="#fff"
        >
          <Flex flexDir="column" h="100vh" justifyContent="space-between">
            <Flex flexDir="column" as="nav">
              <Heading
                mt={50}
                mb={[25, 50, 100]}
                fontSize="xl"
                alignSelf="center"
                letterSpacing="tight"
              >
                Admin Dashboard
              </Heading>
              <Flex
                flexDir={["row", "row", "column", "column", "column"]}
                align={[
                  "center",
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                ]}
                wrap="wrap"
                justifyContent="center"
              >
                <Flex className="sidebar-items">
                  <Link>
                    <Icon
                      as={FiHome}
                      fontSize="md"
                      className="active-icon"
                      style={{ stroke: "#fff", strokeWidth: "3" }}
                    />
                  </Link>
                  <Link to="/admin" _hover={{ textDecor: "none" }}>
                    <Text fontSize="sm">Dashboard</Text>
                  </Link>
                </Flex>
                <Flex className="sidebar-items">
                  <Link>
                    <Icon
                      as={FiBook}
                      fontSize="md"
                      style={{ stroke: "#fff", strokeWidth: "3" }}
                    />
                  </Link>
                  <Link _hover={{ textDecor: "none" }}>
                    <Text fontSize="sm">Grading</Text>
                  </Link>
                </Flex>
                <Flex className="sidebar-items">
                  <Link>
                    <Icon
                      as={FiPieChart}
                      fontSize="md"
                      style={{ stroke: "#fff", strokeWidth: "3" }}
                    />
                  </Link>
                  <Link to="/chart" _hover={{ textDecor: "none" }}>
                    <Text fontSize="sm">Charts</Text>
                  </Link>
                </Flex>
                <Flex className="sidebar-items">
                  <Link>
                    <Icon
                      as={FiEdit}
                      fontSize="md"
                      style={{ stroke: "#fff", strokeWidth: "3" }}
                    />
                  </Link>
                  <Link to="/user" _hover={{ textDecor: "none" }}>
                    <Text fontSize="sm">User Management</Text>
                  </Link>
                </Flex>
              </Flex>
            </Flex>

            <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
              <Avatar my={2} src="" />
              <Text textAlign="center">Admin Name</Text>
            </Flex>
          </Flex>
        </Flex>
        {/* Column 2 */}
        <Flex
          w="85%"
          p="3%"
          bgColor="blackAlpha.100"
          flexDir="column"
          overflow="auto"
        >
          <Grid templateColumns="repeat(5, 1fr)" gap={6} pt="2%" wrap="wrap">
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N1
              </Heading>
              <Text sx={textStyle}>Percentage Context</Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N2
              </Heading>
              <Text sx={textStyle}>Percentage Context</Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N3
              </Heading>
              <Text sx={textStyle}>Percentage Context</Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N4
              </Heading>
              <Text sx={textStyle}>Percentage Context</Text>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N5
              </Heading>
              <Text sx={textStyle}>Percentage Context</Text>
            </Box>
          </Grid>
          {/*
           */}
        </Flex>
      </Flex>
    </Box>
  );
}
