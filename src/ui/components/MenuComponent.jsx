import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const menus = [
  {
    title: "Dashboard",
    link: "/admin",
  },
  {
    title: "Grading",
    link: "/grading",
  },
  {
    title: "List of Students",
    link: "/list",
  },
  {
    title: "Manage Questionnaire",
    link: "/managequestioner",
  },
  {
    title: "Manage Users",
    link: "/user",
  },
];

function MenuComponent() {
  const navigation = useNavigate();
  return (
    <Box
      display={{ base: "block", xl: "none" }}
      pt={"5.50rem"}
      justifyContent={"center"}
      left={"4rem"}
    >
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          {menus.map((value, key) => {
            return <MenuItem key={key} onClick={()=>navigation(`${value.link}`)}>{value.title}</MenuItem>;
          })}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default MenuComponent;
