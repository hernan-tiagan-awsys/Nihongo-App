import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRetrieveProfile } from "./useRetrieveProfile";
// import { useAuthContext } from "./useAuthContext";
// import { useRetrieveProfile } from "./useRetrieveProfile";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const { retrieveProfile } = useRetrieveProfile();

  const signup = async (username, email, password, confirmPassword) => {
    setIsLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_LOCALHOST_API}/api/users/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
        }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError({
        stauts: response.status,
        error: json.error,
      });
      // Swal.fire(`Somethings Not Right!`, `${json.error}`, "error");
      toast({
        title: "Signup Failed",
        position: "top",
        description: `${json.error}`,
        status: "error",
        duration: 2500,
        isClosable: true,
      });
      setIsLoading(false);
    }

    if (response.ok) {
      // save the token to local storage
      localStorage.setItem("token", JSON.stringify(json));

      retrieveProfile(json);
      toast({
        title: "Registration Complete",
        position: "top",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
