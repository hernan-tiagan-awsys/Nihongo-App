import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  IconButton,
  ListItem,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDeleteUser } from "../../../logic/hooks/user/useDeleteUser";

function Userlist() {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { deleteUser } = useDeleteUser();

  const toast = useToast();

  async function handleSubmit(userId) {
    console.log(userId);
    await deleteUser(userId);
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const fetchRegisteredUsers = async () => {
      setIsLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/users/all`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const json = await res.json();

      if (!res.ok) {
        setError(json.error);
        toast({
          title: "Somethings Wrong ❌",
          description: `${json.error}`,
          position: "top",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setIsLoading(false);
      }

      if (res.ok) {
        setRegisteredUsers(json);
      }
    };
    fetchRegisteredUsers();
  }, [toast]);
  return (
    <>
      <Box pt={"5vw"} pb={"5vw"}>
        <Container
          maxW="container.xl"
          p="5"
          borderRadius="10"
          bg={"white"}
          h="90vh"
          maxH="90vh"
          overflow="auto"
          overscrollBehavior="auto"
          sx={{
            "&::-webkit-scrollbar": {
              width: "12px",
              borderRadius: "8px",
              backgroundColor: `rgba(0, 0, 0, 0.25)`,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `rgba(0, 0, 0, 0.25)`,
            },
          }}
        >
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* Code Here */}
                {registeredUsers?.map((user) => {
                  return (
                    <Tr key={user._id}>
                      <Td isNumeric>{user._id}</Td>
                      <Td>{user.username}</Td>
                      <Td>{user.email}</Td>
                      <Td>
                        <IconButton
                          icon={<DeleteIcon />}
                          onClick={() => {
                            handleSubmit(user._id);
                          }}
                        />
                      </Td>
                    </Tr>
                  );
                })}
                {/* Code Here */}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
}

export default Userlist;
