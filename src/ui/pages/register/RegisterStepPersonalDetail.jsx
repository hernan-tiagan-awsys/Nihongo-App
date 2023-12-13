import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../main/ThemeColors";

function RegisterStepPersonalDetail({
  formData,
  handleChangeFormData,
  setActiveStep,
}) {
  const { body, bg, border, fontColor, success, warning, info } = ThemeColors();

  return (
    <Card mt="2em" bg={bg} variant="elevated" size="sm" boxShadow="none">
      <Box id="google_translate_element"></Box>
      <CardBody>
        <form>
          <FormControl>
            {/*First Name input Form */}
            <HStack>
              <Box w="50%">
                <FormLabel>First Name</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="First Name"
                    colorScheme="blackAlpha"
                    name="firstNameEng"
                    value={formData.firstNameEng}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>フルスト名前</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="フルスト名前"
                    colorScheme="blackAlpha"
                    name="firstNameJap"
                    value={formData.firstNameJap}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            {/*Middle Name input Form */}
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Middle Name</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Middle Name"
                    colorScheme="blackAlpha"
                    name="middleNameEng"
                    value={formData.middleNameEng}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>ミッヅロ名前</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="ミッヅロ名前"
                    colorScheme="blackAlpha"
                    name="middleNameJap"
                    value={formData.middleNameJap}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            {/*Last Name input Form */}
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Last Name</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Last Name"
                    colorScheme="blackAlpha"
                    name="lastNameEng"
                    value={formData.lastNameEng}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>ラスト名前</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="ラスト名前"
                    colorScheme="blackAlpha"
                    name="lastNameJap"
                    value={formData.lastNameJap}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>

            {/* Nickname and Gender */}
            <HStack mt="2em">
              <Box w="33%">
                <FormLabel>Nickname</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Nickname"
                    colorScheme="blackAlpha"
                    name="nickNameEng"
                    value={formData.nickNameEng}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="33%">
                <FormLabel>ニックネーム</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="ニックネーム"
                    colorScheme="blackAlpha"
                    name="nickNameJap"
                    value={formData.nickNameJap}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="33%">
                <FormLabel>Suffix</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    id="register-username-input"
                    type="text"
                    placeholder="Suffix [N/A if not applicable]"
                    colorScheme="blackAlpha"
                    name="suffix"
                    value={formData.suffix}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>

            <Flex mt="3em">
              <Spacer />
              <Button
                rightIcon={<ChevronRightIcon />}
                fontWeight="normal"
                fontSize=".75em"
                size="md"
                colorScheme="gray"
                variant="outline"
                onClick={() => setActiveStep(1)}
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

export default RegisterStepPersonalDetail;
