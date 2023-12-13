import {
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";
import LoginFormPopOverAlert from "./LoginFormPopOverAlert";

function LoginEmailInputField({
  isEmailEmpty,
  setEmail,
  email,
  isOpen,
  onClose,
}) {
  return (
    <>
      <FormLabel
        fontSize={{ base: "0.75em", lg: "1em" }}
        mt={{ base: "2em", lg: "1em" }}
      >
        Email
      </FormLabel>
      <LoginFormPopOverAlert
        isOpen={isEmailEmpty() && isOpen}
        onClose={onClose}
        popOverAlertText="Email field is empty"
      >
        <InputGroup size="md">
          <Input
            fontSize={{ base: "0.75em", lg: "1em" }}
            id="login-username-input"
            placeholder=" Enter your email."
            colorScheme="blackAlpha"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputRightAddon
            fontSize={{ base: "0.75em", lg: "1em" }}
            children="@awsys-i.com"
          />
        </InputGroup>
      </LoginFormPopOverAlert>
    </>
  );
}

export default LoginEmailInputField;
