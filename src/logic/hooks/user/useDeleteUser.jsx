import { useToast } from "@chakra-ui/toast";
import { useState } from "react";

export function useDeleteUser() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const deleteUser = async (userId) => {
        const token = JSON.parse(localStorage.getItem("token"));
        setIsLoading(true);
        const response = await fetch(
            `${import.meta.env.VITE_LOCALHOST_API}/api/users/delete`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId,
                }),
            }
        );

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            toast({
                title: "Deleting Failed",
                position: "top",
                description: `${json.error}`,
                status: "error",
                duration: 2500,
                isClosable: true,
            });
            setIsLoading(false);
        }

        if (response.ok) {
            toast({
                title: "Deleted Succesfully!",
                position: "top",
                status: "success",
                duration: 2500,
                isClosable: true,
            });
            setIsLoading(false);
        }
    };

    return { deleteUser, isLoading, error };
}
