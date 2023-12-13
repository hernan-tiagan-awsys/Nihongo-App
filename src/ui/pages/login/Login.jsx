import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Flex,
  FormControl,
  Button,
  Spacer,
  Link,
  useDisclosure,
  CardBody,
} from "@chakra-ui/react";

import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { useLogin } from "../../../logic/hooks/user/useLogin";
import Loader from "../../components/Loader";
import ThemeColors from "../main/ThemeColors";
import LoginFormContainer from "./LoginFormContainer";
import LoginFormCardHeader from "./LoginFormCardHeader";
import LoginEmailInputField from "./LoginEmailInputField";
import LoginPasswordInputField from "./LoginPasswordInputField";
import LoginFormCard from "./LoginFormCard";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { border } = ThemeColors();

  const { login, isLoading } = useLogin();
  const { isOpen, onToggle, onClose } = useDisclosure();

  function isEmailEmpty() {
    return email === "" ? true : false;
  }

  function isPasswordEmpty() {
    return password === "" ? true : false;
  }

  const handleSubmit = async (e) => {
    onToggle();
    e.preventDefault();
    if (!isEmailEmpty() && !isPasswordEmpty()) {
      await login(email + "@awsys-i.com", password);
    }
  };

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}

      <LoginFormContainer>
        <LoginFormCard>
          <LoginFormCardHeader />
          {/* Login Form */}
          <CardBody mx={{ base: "-1em" }}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                {/* Email Input */}
                <LoginEmailInputField
                  email={email}
                  isEmailEmpty={isEmailEmpty}
                  setEmail={setEmail}
                  isOpen={isOpen}
                  onClose={onClose}
                />

                {/* Password Input */}
                <LoginPasswordInputField
                  password={password}
                  setPassword={setPassword}
                  isPasswordEmpty={isPasswordEmpty}
                  isOpen={isOpen}
                  onClose={onClose}
                />

                {/* Forgot password */}
                <Flex>
                  <Spacer />
                  <Link
                    fontSize={{ base: "0.75em", lg: "1em" }}
                    my={{ base: "1.5em", lg: "1em" }}
                    onClick={() => {
                      navigate("/recovery");
                    }}
                  >
                    Forgot Password <QuestionOutlineIcon />
                  </Link>
                </Flex>
                <Flex>
                  <Spacer />
                  <Button
                    mb={{ base: "2.5vh" }}
                    data-testid="login-button"
                    variant="outline"
                    borderColor={border}
                    type="submit"
                    isDisabled={isLoading}
                  >
                    Login
                  </Button>
                </Flex>
              </FormControl>
            </form>
          </CardBody>
        </LoginFormCard>
      </LoginFormContainer>
    </>
  );
}
