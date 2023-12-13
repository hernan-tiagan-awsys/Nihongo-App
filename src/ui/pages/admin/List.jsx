import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  useBoolean,
  ChakraProvider,
  IconButton,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

} from "@chakra-ui/react";
import { FiBook, FiSearch, FiPaperclip, FiUserCheck } from 'react-icons/fi';
import SideBar from "../../components/SideBar";

export default function List() {
  const [toggle, setToggle] = useBoolean();
  console.log(toggle);
  const data = [
    { id: 1, name: 'Rolly', email: 'rolly@awsys-i.com', level: 'N1', grade: '3' },
    { id: 2, name: 'Valto', email: 'valto@awsys-i.com', level: 'N4', grade: '3' },
    { id: 3, name: 'Marwan', email: 'marwan@awsys-i.com', level: 'N3', grade: '3' },
    { id: 4, name: 'Mario', email: 'mario@awsys-i.com', level: 'N3', grade: '3' },
  ];




  const boxStyle = {
    w: "100%",
    h: "150",
    shadow: "lg",
    bgColor: "RGBA(0, 0, 0, 0.06)",
  };
  const headStyle = {
    color: "blackAlpha.900",
    textAlign: "left",
    p: 3,
    m: 2,
    fontSize: "1.5em",
  };
 // const TableWithSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');

    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedLevel === '' || item.level === selectedLevel)
    );

    return (
      <Box>
        <Flex flexDir={"row"} justifyContent={"center"}>
          <SideBar toggle={toggle} onClick={setToggle.toggle} />
          <Flex
            minH={"100vh"}
            marginLeft={toggle ? "20rem" : "0px"}
            transition={"800ms"}
            p="100px"
            flexDir={"column"}
          >
            <Heading
              fontWeight="normal"
              mb={4}
              letterSpacing="tight"
              fontSize="2xl"
              mt="2%"
            >
              Welcome,{" "}
              <Flex fontWeight="bold" display="inline-flex">
                This is List of Student page
              </Flex>
              !
            </Heading>

          
          <Grid templateColumns="repeat(1, 2fr)" h="5vh" gap={6} mt="5%">
            <Grid templateColumns="repeat(2, 1fr)" h="5vh" gap={6} mt="5%">
              <InputGroup
                borderRadius="10px"
                mr={2}
              >
                <InputLeftElement
                  pointerEvents="none"
                  children={<FiSearch color="gray" />}
                />
                <Input
                  mb={4}
                  letterSpacing="tight"
                  mt="2%"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter by Name"
                  borderRadius="10px"
                />
              </InputGroup>
              <Select
                mb={4}
                letterSpacing="tight"
                mt="2%"
                placeholder="Filter by Nihongo Level"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="N1">N1</option>
                <option value="N2">N2</option>
                <option value="N3">N3</option>
                <option value="N4">N4</option>
                <option value="N5">N5</option>
              </Select>

            </Grid>
            <Grid
              templateColumns="repeat(1, 1fr)"
              gap={10}
              pt="5%"
              h="60vh"
              mb={10}
            >
              <Flex flexDir="column">
                <Flex overflow="auto">
                  <Table id="myTable" variant="unstyled" mt={4} mb={4}
                    letterSpacing="tight">
                    <Thead>
                      <Tr color="gray">
                        <Th>Name of Student</Th>
                        <Th>Email</Th>
                        <Th>Nihongo Level</Th>
                        <Th>Action</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {filteredData.map((item) => (
                        <Tr key={item.id}>
                          <Td>{item.name}</Td>
                          <Td>{item.email}</Td>
                          <Td>{item.level}</Td>
                          <Td>
                            <a href='#' >view Complete Details</a>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Flex>

              </Flex>
            </Grid>
          </Grid>
          </Flex>
        </Flex>

      </Box>
    );
 // };
  

};