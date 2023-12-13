import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Avatar,
    Button,
    Flex,
    Heading,
    Icon,
    Td,
    Tr,
    useBoolean,
    useDisclosure,
} from "@chakra-ui/react";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDeleteUser } from "../../../logic/hooks/user/useDeleteUser";
import { useRef } from "react";
import UserProfileModal from "./UserProfileModal";
import AlerPopUp from "../../components/AlerPopUp";

const UsersRow = ({ user }) => {
    const { deleteUser } = useDeleteUser();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isVisible, setIsVisible] = useBoolean();

    async function handleSubmit(userId) {
        await deleteUser(userId);
    }

    return (
        <Tr borderBottom="1px" borderColor="darkslategray">
            {isVisible && (
                <UserProfileModal
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                    user={user}
                />
            )}
            <Td>
                <Flex align="center">
                    <Avatar size="sm" mr={2} src="" />
                    <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                            {user.username}
                        </Heading>
                    </Flex>
                </Flex>
            </Td>
            <Td>{user.email}</Td>
            <Td>N1</Td>
            <Td isNumeric>
                <Link>
                    <Icon
                        as={FiEye}
                        fontSize="lg"
                        mr="0.5em"
                        onClick={setIsVisible.on}
                    />
                </Link>
                <Link>
                    <Icon as={FiEdit} fontSize="lg" mr="0.5em" />
                </Link>

                <Link>
                    <Icon as={FiTrash} onClick={onOpen} fontSize="lg" />

                    <AlerPopUp
                        isOpen={isOpen}
                        onClose={onClose}
                        onClick={() => handleSubmit(user._id)}
                        message={"User"}
                    />
                </Link>
            </Td>
        </Tr>
    );
};
export default UsersRow;
