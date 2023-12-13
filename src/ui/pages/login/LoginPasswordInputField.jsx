import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import LoginFormPopOverAlert from "./LoginFormPopOverAlert";

function LoginPasswordInputField({
  password,
  isPasswordEmpty,
  setPassword,
  isOpen,
  onClose,
}) {
  const [show, setShow] = useState(false);
  return (
    <>
      <FormLabel
        fontSize={{ base: "0.75em", lg: "1em" }}
        mt={{ base: "2em", lg: "2em" }}
      >
        Password
      </FormLabel>
      <LoginFormPopOverAlert
        isOpen={isPasswordEmpty() && isOpen}
        onClose={onClose}
        popOverAlertText="Password field is empty"
      >
        <InputGroup size="md">
          <Input
            fontSize={{ base: "0.75em", lg: "1em" }}
            id="login-password-input"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement mr={2}>
            <IconButton
              icon={show ? <ViewOffIcon /> : <ViewIcon />}
              size="sm"
              variant="unstyled"
              isRound={true}
              onClick={() => setShow(!show)}
            />
          </InputRightElement>
        </InputGroup>
      </LoginFormPopOverAlert>
    </>
  );
}

export default LoginPasswordInputField;
