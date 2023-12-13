import React, { useState } from "react";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Spacer,
  Card,
  InputRightAddon,
  CardBody,
  InputGroup,
  FormHelperText,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import ThemeColors from "../main/ThemeColors";

function RegisterStepLoginDetail1({
  handleChangeFormData,
  isEmailValidFormat,
  formData,
  handleSubmit,
  setActiveStep,
}) {
  const { body, bg, border, fontColor, error, success, warning, info } =
    ThemeColors();

  return (
    <Card bg={bg} variant="elevated" size="sm" boxShadow="none">
      <CardBody>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            {/* Username input Form */}
            <FormLabel>Username</FormLabel>
            <InputGroup mt="0.75em" size="md">
              <Input
                id="register-username-input"
                type="text"
                placeholder="Username"
                colorScheme="blackAlpha"
                name="username"
                value={formData.username}
                onChange={handleChangeFormData}
                pb="-10em"
              />
            </InputGroup>

            {/*Email Input Form*/}
            <FormLabel mt="2em">Email</FormLabel>
            <InputGroup mt="0.75em" size="md">
              <Input
                id="register-email-input"
                placeholder="Email"
                colorScheme="blackAlpha"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChangeFormData}
              />
              <InputRightAddon children="@awsys-i.com" />
            </InputGroup>
            <FormHelperText
              mt="1.5em"
              fontSize="0.75em"
              color={isEmailValidFormat ? "green.300" : "gray.400"}
            >
              <ChevronRightIcon />
              Email may only contain letters (a-z), numebrs (0-9) and periods.
            </FormHelperText>
            <Flex mt="2.5em">
              <Spacer />
              <Button
                rightIcon={<ChevronRightIcon />}
                fontWeight="normal"
                colorScheme="gray"
                variant="ghost"
                onClick={() => setActiveStep(4)}
              >
                Next
              </Button>
            </Flex>
          </FormControl>
        </form>
      </CardBody>
    </Card>
  );
}

export default RegisterStepLoginDetail1;
