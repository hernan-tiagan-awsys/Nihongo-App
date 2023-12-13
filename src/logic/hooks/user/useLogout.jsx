import { useNavigate } from "react-router-dom";
import { useUserContext } from "./useUserContext";
import { useToast } from "@chakra-ui/react";
import { useKanaContext } from "../kana/useKanaContext";

export const useLogout = () => {
    const { dispatch } = useUserContext();
    const toast = useToast();
    const navigate = useNavigate();
    const { dispatch: kanaDispatch } = useKanaContext();

    const logout = () => {
        // remove token from local storage
        localStorage.removeItem("token");
        localStorage.removeItem("questions");

        kanaDispatch({ type: "clear" });
        dispatch({ type: "LOGOUT" });
        navigate("/login");
        toast({
            title: "User Logged Out",
            position: "top",
            status: "info",
            duration: 2500,
            isClosable: true,
        });
    };

    return { logout };
};
