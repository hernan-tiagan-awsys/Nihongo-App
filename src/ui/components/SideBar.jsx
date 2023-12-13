import {
    Avatar,
    Box,
    Button,
    Flex,
    IconButton,
    List,
    ListItem,
    Slide,
    VStack,
} from "@chakra-ui/react";
// import { useState } from "react";
// import React from "react";
import {
    FiHome,
    FiBook,
    FiUser,
    FiUserCheck,
    FiPaperclip,
    FiMenu,
    FiLogOut,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ThemeColors from "../pages/main/ThemeColors";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { useUserContext } from "../../logic/hooks/user/useUserContext";

const menus = [
    {
        title: "Dashboard",
        link: "/admin",
        icon: <FiHome></FiHome>,
    },
    {
        title: "Grading",
        link: "/grading",
        icon: <FiBook />,
    },
    {
        title: "List of Students",
        link: "/list",
        icon: <FiUser />,
    },
    {
        title: "Manage Questionnaire",
        link: "/manage-questionaire",
        icon: <FiPaperclip />,
    },
    {
        title: "Manage Users",
        link: "/users",
        icon: <FiUserCheck />,
    },
];

function SideBar({ toggle, onClick }) {
    const { user } = useUserContext();
    const navigate = useNavigate();
    const { bg, fontColor, body, hover } = ThemeColors();

    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let timeoutId;

        if (!toggle) {
            timeoutId = setTimeout(() => {
                setHidden(true);
            }, 800);
        } else {
            setHidden(false);
        }

        return () => clearTimeout(timeoutId);
    }, [toggle]);

    return (
        <Flex
            bg={bg}
            h="100vh"
            pt="6.50rem"
            w="22vw"
            flexDir={["column"]}
            alignItems={"center"}
            flexWrap={"wrap"}
            left={toggle ? "0" : "-20vw"}
            transition="800ms"
            alignContent={"space-around"}
            position={"fixed"}
            display={{ base: "none", xl: "flex" }}
        >
            <IconButton
                aria-label="menu"
                icon={toggle ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                fontSize={"1.2rem"}
                bg={bg}
                _hover={{ bg: bg }}
                left={"21vw"}
                onClick={onClick}
                borderRightRadius={"50%"}
                position={"absolute"}
                zIndex={1}
                mt={"2.4rem"}
                pl={".75vw"}
                color={fontColor}
                h={"5rem"}
            ></IconButton>
            <VStack hidden={hidden}>
                <Flex mt={"2rem"}>
                    <Avatar
                        size="xl"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                    />
                </Flex>
                <Flex
                    pt={"1rem"}
                    fontSize={"xl"}
                    fontWeight={"bold"}
                    color={fontColor}
                >
                    @{user.username}
                </Flex>
                <List
                    mt={"1.8rem"}
                    color={fontColor}
                    width={"100%"}
                    alignItems={"center"}
                    p={2}
                >
                    {menus.map((value, key) => {
                        return (
                            <ListItem
                                key={key}
                                display={"flex"}
                                mt={"1.3rem"}
                                mb={"1.3rem"}
                                p="0.5em"
                                alignItems={"center"}
                                fontSize={"sm"}
                                onClick={() => navigate(`${value.link}`)}
                                cursor={"pointer"}
                                _hover={{ bg: hover }}
                                width={"100%"}
                                borderRadius={"00.75rem"}
                            >
                                <Box
                                    pt={"0.188rem"}
                                    pb={"0.188rem"}
                                    pr={"1.8rem"}
                                    pl={"1em"}
                                >
                                    {value.icon}
                                </Box>
                                <Box pt={"0.1rem"}>{value.title}</Box>
                            </ListItem>
                        );
                    })}
                </List>
                <Button
                    mt={"1.5rem"}
                    bg={body}
                    // _hover={{ bg: "#61777F" }}
                    color={fontColor}
                    rightIcon={<FiLogOut />}
                >
                    Logout
                </Button>
            </VStack>
        </Flex>
    );
}

export default SideBar;
