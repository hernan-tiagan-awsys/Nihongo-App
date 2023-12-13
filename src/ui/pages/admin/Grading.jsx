import React from 'react'
import { useState } from "react";
// import { Chart } from 'react-chartjs-2';
import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  // AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  // Link,
  Box,
  Grid,
  // Button,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  FiHome,
  FiPieChart,
  FiChevronDown,
  FiChevronUp,
  FiEdit,
  FiBook,
  FiSearch,
  FiBell,
  FiArrowDown,
  FiUser,
  FiPaperclip,
  FiUserCheck,
} from "react-icons/fi";
import { TriangleDownIcon } from '@chakra-ui/icons';
export default function List() {
    const [display, changeDisplay] = useState("hide");
  return (
    <Box>
      <Flex
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        justifyContent="center"
      >
        <Flex
          w="90%"
          p="5%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
          bg="white"
          pt="6%"
          boxShadow="2xl"
        >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/list">Grading</BreadcrumbLink>
          </BreadcrumbItem>

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<TriangleDownIcon />}
              variant="outline"
              border="none"
            />
            <MenuList>
              
                <MenuItem as="a" href="/list" icon={<FiUser />}>
                  List of Students
                </MenuItem>
                <MenuItem as="a" href="/managequestioner" icon={<FiPaperclip />}>
                  Manage Questionaire
                </MenuItem>
                <MenuItem as="a" href="/user" icon={<FiUserCheck />}>
                  Manage Users
                </MenuItem>
              </MenuList>
          </Menu>
        </Breadcrumb>
        <Flex align="flex-end">
            <Heading mt={5} as="h2" size="lg" letterSpacing="tight">
              Grading
            </Heading>
            {/* <Text fontSize="sm" color="gray" ml={4}>
              November 2023
            </Text> */}
          </Flex>
         <Flex alignContent="center" p={5} m={5}>
            
             
             
        
           
          
          </Flex>
          <Flex flexDir="column">
            <Flex overflow="auto">
              
            </Flex>
            <Flex align="center">
              <Divider />
              <IconButton
                icon={display == "show" ? <FiChevronUp /> : <FiChevronDown />}
                onClick={() => {
                  if (display == "show") {
                    changeDisplay("none");
                  } else {
                    changeDisplay("show");
                  }
                }}
              />
              <Divider />
            </Flex>
          </Flex>
      </Flex>
      
    </Flex>
    </Box>
  );
}
