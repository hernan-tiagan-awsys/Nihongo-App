import { useState } from "react";
import { useRetrieveProfile } from "./useRetrieveProfile";
import { useToast } from "@chakra-ui/react";
import { useKanaContext } from "../kana/useKanaContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { retrieveProfile } = useRetrieveProfile();
  const toast = useToast();
  const { dispatch: kanaDispatch } = useKanaContext();

  const login = async (email, password) => {
    setIsLoading(true);

    const response = await fetch(
      `${import.meta.env.VITE_LOCALHOST_API}/api/users/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      toast({
        title: "Login Failed",
        position: "top",
        description: "Check Password and Email if input is Valid",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
      setIsLoading(false);
    }

    if (response.ok) {
      // save the token to local storage
      localStorage.setItem("token", JSON.stringify(json));
      kanaDispatch({ type: "clear" });
      retrieveProfile(json);
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
