import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Flex,
  Center,
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
  Text,
  Link,
  InputRightElement,
  InputGroup,
  AbsoluteCenter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spinner,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Box,
} from "@chakra-ui/react";

import {
  CheckIcon,
  ViewIcon,
  ViewOffIcon,
  ExternalLinkIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import { useSignup } from "../../../logic/hooks/user/useSignup";
import ThemeColors from "../main/ThemeColors";

export default function Register() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const { body, bg, border, fontColor, success, warning, info } = ThemeColors();
  const highlight = useColorModeValue("gray.200", "dark.200");
  const [isPassValidFormat, setIsPassValidFormat] = useState(false);
  const [isPassValidLength, setIsPassValidLength] = useState(false);
  const [isPassContainUpper, setIsPassContainUpper] = useState(false);
  const [isPassContainLower, setIsPassContainLower] = useState(false);
  const [isPassContainSpecial, setIsPassContainSpecial] = useState(false);
  const [isPassContainNumber, setIsPassContainNumber] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(false);
  const { isOpen, onToggle, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isUsernameEmpty = () => {
    return formData.username === "" ? true : false;
  };

  const isEmailEmpty = () => {
    return formData.email === "" ? true : false;
  };

  const { signup, isLoading, error } = useSignup();

  function handleChangeFormData(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });

    if (name === "password") {
      passwordChecker(e.target.value);
    }

    if (name === "confirmPassword") {
      formData.password === e.target.value
        ? setIsSamePassword(true)
        : setIsSamePassword(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isOpen) onToggle();
    await signup(
      formData.username,
      formData.email + "@awsys-i.com",
      formData.password,
      formData.confirmPassword
    );
  };

  function passwordChecker(str) {
    const strNumChars = /[0-9]/;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    // Check if contains 1 uppercase
    str !== str.toLowerCase()
      ? setIsPassContainUpper(true)
      : setIsPassContainUpper(false);

    // Check if contains 1 lowercase
    str !== str.toUpperCase()
      ? setIsPassContainLower(true)
      : setIsPassContainLower(false);

    // Check if contains 1 number
    strNumChars.test(str)
      ? setIsPassContainNumber(true)
      : setIsPassContainNumber(false);

    // Check if contains 1 special character
    specialChars.test(str)
      ? setIsPassContainSpecial(true)
      : setIsPassContainSpecial(false);

    // Check if lenth greater or equal to 8
    str.length >= 8 ? setIsPassValidLength(true) : setIsPassValidLength(false);
  }

  useEffect(() => {
    function passwordValidChecker() {
      isPassValidLength &&
      isPassContainUpper &&
      isPassContainLower &&
      isPassContainSpecial &&
      isPassContainNumber
        ? setIsPassValidFormat(true)
        : setIsPassValidFormat(false);
    }
    passwordValidChecker();

    () => {};
  }, [
    isPassValidFormat,
    isPassValidLength,
    isPassContainUpper,
    isPassContainLower,
    isPassContainSpecial,
    isPassContainNumber,
  ]);

  return (
    <Box>
      <Spacer minH="10vh" />
      <Center
        h="90vh"
        p="5%"
        overflow="auto"
        overscrollBehavior="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "14px",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.15)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.15)`,
          },
        }}
      >
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
        <Card
          bg={bg}
          w="50vw"
          variant="elevated"
          size="sm"
          boxShadow="lg"
          px="5"
          py="5"
          mt="5vh"
        >
          <CardBody>
            <Text fontSize="4xl">Register</Text>
            <Flex>
              <Text fontSize="1xl" mr="1">
                Already have an account?
              </Text>
              <Link
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login <ExternalLinkIcon mx="2px" />
              </Link>
            </Flex>
            <form onSubmit={handleSubmit}>
              <FormControl>
                {/* Username input Form */}
                <FormLabel mt="3">Username</FormLabel>
                <Popover
                  returnFocusOnClose={false}
                  autoFocus={false}
                  isOpen={isUsernameEmpty() && isOpen}
                  onClose={onClose}
                  placement="top-end"
                  closeOnBlur={false}
                  variant="outline"
                >
                  <PopoverTrigger>
                    <InputGroup size="sm">
                      <Input
                        id="register-username-input"
                        type="text"
                        placeholder="Enter Username"
                        colorScheme="blackAlpha"
                        name="username"
                        value={formData.username}
                        onChange={handleChangeFormData}
                      />
                    </InputGroup>
                  </PopoverTrigger>
                  <PopoverContent bg={highlight} w="fit-content">
                    <PopoverArrow bg={highlight} />
                    <PopoverBody fontSize="1vw">
                      {<ChevronRightIcon mr="2" />}Username field is empty.
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                {/*Email Input Form*/}
                <FormLabel mt="3">Email</FormLabel>
                <Popover
                  returnFocusOnClose={false}
                  autoFocus={false}
                  isOpen={isEmailEmpty() && isOpen}
                  onClose={onClose}
                  placement="top-end"
                  closeOnBlur={false}
                  variant="outline"
                >
                  <PopoverTrigger>
                    <InputGroup size="sm">
                      <Input
                        id="register-email-input"
                        placeholder="Enter Email"
                        colorScheme="blackAlpha"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChangeFormData}
                      />
                      <InputRightAddon children="@awsys-i.com" />
                    </InputGroup>
                  </PopoverTrigger>
                  <PopoverContent bg={highlight} w="fit-content">
                    <PopoverArrow bg={highlight} />
                    <PopoverBody fontSize="1vw">
                      {<ChevronRightIcon mr="2" />}Email field is empty.
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                {/* Password Input Form */}
                <FormLabel mt="3">Password</FormLabel>
                <InputGroup size="sm">
                  <Input
                    id="register-password-input"
                    type={show ? "text" : "password"}
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleChangeFormData(e)}
                    mb="1.25em"
                  />
                  <InputRightElement mr={3}>
                    <IconButton
                      icon={show ? <ViewOffIcon /> : <ViewIcon />}
                      size="sm"
                      variant="unstyled"
                      isRound={true}
                      onClick={handleClick}
                    />
                  </InputRightElement>
                </InputGroup>
                <FormHelperText
                  color={isPassValidLength ? "green.300" : "gray.400"}
                >
                  <ChevronRightIcon />
                  Password must be at least eight-character.
                </FormHelperText>
                <FormHelperText
                  color={isPassContainUpper ? "green.300" : "gray.400"}
                >
                  <ChevronRightIcon />
                  Password must contain at least one uppercase.
                </FormHelperText>
                <FormHelperText
                  color={isPassContainLower ? "green.300" : "gray.400"}
                >
                  <ChevronRightIcon />
                  Password must contain at least one lowercase.
                </FormHelperText>
                <FormHelperText
                  color={isPassContainNumber ? "green.300" : "gray.400"}
                >
                  <ChevronRightIcon />
                  Password must contain at least one number.
                </FormHelperText>
                <FormHelperText
                  color={isPassContainSpecial ? "green.300" : "gray.400"}
                  mb="1.25em"
                >
                  <ChevronRightIcon />
                  Password must contain at least one special character.
                </FormHelperText>
                {/* Password Input Form */}
                <FormLabel mt="3">Verify Password</FormLabel>
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
                <Flex>
                  <Spacer />
                  <Button
                    data-testid="register-button"
                    leftIcon={<CheckIcon />}
                    colorScheme="gray"
                    variant="outline"
                    borderColor={border}
                    my="1.5em"
                    type="submit"
                    isDisabled={
                      isLoading ||
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
      </Center>
    </Box>
  );
}
