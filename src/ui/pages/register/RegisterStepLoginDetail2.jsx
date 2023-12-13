import React, { useState } from "react";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  IconButton,
  Spacer,
  Card,
  InputRightAddon,
  CardBody,
  InputRightElement,
  InputLeftAddon,
  InputGroup,
  AbsoluteCenter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spinner,
} from "@chakra-ui/react";

import {
  CheckIcon,
  ViewIcon,
  ViewOffIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import ThemeColors from "../main/ThemeColors";

function RegisterStepLoginDetail2({
  handleChangeFormData,
  formData,
  isLoading,
  handleSubmit,
  isEmailValidFormat,
  isPassValidFormat,
  isPassValidLength,
  isPassContainUpper,
  isPassContainLower,
  isPassContainSpecial,
  isPassContainNumber,
  isSamePassword,
}) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { body, bg, border, fontColor, success, warning, info } = ThemeColors();

  return (
    <>
      <Modal isOpen={isLoading} size="full" bg="gray.100">
        <ModalOverlay />
        <ModalContent bg="blackAlpha.100">
          <ModalBody>
            <AbsoluteCenter>
              <Spinner color="white" size="xl" />
            </AbsoluteCenter>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Card bg={bg} variant="unstyled" size="sm" boxShadow="none">
        <CardBody>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              {/* Password Input Form */}
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  id="register-password-input"
                  type={show ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleChangeFormData(e)}
                />
                <InputRightElement mr={3}>
                  <IconButton
                    icon={show ? <ViewOffIcon /> : <ViewIcon />}
                    size="md"
                    variant="unstyled"
                    isRound={true}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <FormHelperText
                fontSize="0.75em"
                color={isPassValidLength ? "green.300" : "gray.400"}
              >
                <ChevronRightIcon />
                Password must be at least eight-character.
              </FormHelperText>
              <FormHelperText
                fontSize="0.75em"
                color={isPassContainUpper ? "green.300" : "gray.400"}
              >
                <ChevronRightIcon />
                Password must contain at least one uppercase.
              </FormHelperText>
              <FormHelperText
                fontSize="0.75em"
                color={isPassContainLower ? "green.300" : "gray.400"}
              >
                <ChevronRightIcon />
                Password must contain at least one lowercase.
              </FormHelperText>
              <FormHelperText
                fontSize="0.75em"
                color={isPassContainNumber ? "green.300" : "gray.400"}
              >
                <ChevronRightIcon />
                Password must contain at least one number.
              </FormHelperText>
              <FormHelperText
                fontSize="0.75em"
                color={isPassContainSpecial ? "green.300" : "gray.400"}
              >
                <ChevronRightIcon />
                Password must contain at least one special character.
              </FormHelperText>
              {/* Password Input Form */}
              <FormLabel mt="2em">Verify Password</FormLabel>
              <InputGroup size="sm">
                <Input
                  id="register-verify-password-input"
                  type={show ? "text" : "password"}
                  placeholder="*******"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChangeFormData}
                  isDisabled={!isPassValidFormat}
                />
                <InputRightElement mr={3}>
                  <IconButton
                    icon={show ? <ViewOffIcon /> : <ViewIcon />}
                    size="sm"
                    variant="unstyled"
                    isRound={true}
                    isDisabled={!isPassValidFormat}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <FormHelperText
                hidden={
                  isSamePassword ||
                  formData.password === "" ||
                  formData.confirmPassword === ""
                }
                color="red.300"
              >
                <ChevronRightIcon />
                {!isSamePassword && "Password does not match"}
              </FormHelperText>
              <Flex mt="2.5em">
                <Spacer />
                <Button
                  leftIcon={<CheckIcon />}
                  colorScheme="gray"
                  variant="outline"
                  borderColor={border}
                  type="submit"
                  isDisabled={
                    isLoading ||
                    !isEmailValidFormat ||
                    !isSamePassword ||
                    formData.confirmPassword === "" ||
                    !isPassValidFormat ||
                    !formData
                  }
                >
                  Register
                </Button>
              </Flex>
            </FormControl>
          </form>
        </CardBody>
      </Card>
    </>
  );
}

export default RegisterStepLoginDetail2;
