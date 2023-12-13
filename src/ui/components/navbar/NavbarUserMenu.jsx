import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Avatar,
    AvatarBadge,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";
import NavbarLogoutButton from "./NavbarLogoutButton";
import { useLogout } from "../../../logic/hooks/user/useLogout";
import ThemeColors from "../../pages/main/ThemeColors";
import { FiBookOpen, FiHome, FiLogOut, FiPieChart } from "react-icons/fi";

function NavbarUserMenu() {
    const { user } = useUserContext();

    const { bg, hover } = ThemeColors();

    const { logout } = useLogout();
    return (
        <Menu id="nav-bar-menu">
            <MenuButton
                id="nav-bar-menu-button"
                data-testid="nav-bar-menu-button"
                as={IconButton}
                bg="transparent"
                icon={
                    <Avatar name={user.username} size="sm" m={1}>
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>
                }
            />
            <MenuList bg={bg}>
                <MenuItem
                    bg="transparent"
                    _hover={{ bg: hover }}
                    icon={<FiHome />}
                    as={Link}
                    to="/"
                >
                    <Text>Home</Text>
                </MenuItem>
                {user.role === "admin" && (
                    <MenuItem
                        bg="transparent"
                        _hover={{ bg: hover }}
                        icon={<FiPieChart />}
                        as={Link}
                        to="/admin"
                    >
                        Admin Dashboard
                    </MenuItem>
                )}
                {(user.role === "teacher" || user.role === "admin") && (
                    <MenuItem
                        bg="transparent"
                        _hover={{ bg: hover }}
                        icon={<FiBookOpen />}
                        as={Link}
                        to="/manage-questionaire"
                    >
                        Manage Questionaire
                    </MenuItem>
                )}
                {user.role === "student" && (
                    <MenuItem
                        bg="transparent"
                        icon={<ChevronRightIcon />}
                        _hover={{ bg: hover }}
                        as={Link}
                        to="/userprofile"
                    >
                        User Profile
                    </MenuItem>
                )}
                <NavbarLogoutButton
                    bg="transparent"
                    icon={<FiLogOut />}
                    _hover={{ bg: hover }}
                    onClick={() => {
                        logout();
                        // queryClient.invalidateQueries(["user"]);
                    }}
                >
                    Logout
                </NavbarLogoutButton>
            </MenuList>
        </Menu>
    );
}

export default NavbarUserMenu;
