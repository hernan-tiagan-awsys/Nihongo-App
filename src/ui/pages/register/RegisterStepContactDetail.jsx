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

function RegisterStepContactDetail({
  formData,
  handleChangeFormData,
  setActiveStep,
}) {
  const { body, bg, border, fontColor, success, warning, info } = ThemeColors();
  return (
    <Card mt="2em" bg={bg} variant="elevated" size="sm" boxShadow="none">
      <CardBody>
        <form>
          <FormControl>
            <FormLabel color="gray.500" mb="1.5em">
              Current Address:
            </FormLabel>
            <HStack>
              <Box w="50%">
                <FormLabel>Country</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="text"
                    placeholder="Country"
                    colorScheme="blackAlpha"
                    name="currentCountry"
                    value={formData.currentCountry}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Province/Region</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="text"
                    placeholder="Province/Region"
                    colorScheme="blackAlpha"
                    name="currentProvinceRegion"
                    value={formData.currentProvinceRegion}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Town/City</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="text"
                    placeholder="Town/City"
                    colorScheme="blackAlpha"
                    name="currentTownCity"
                    value={formData.currentTownCity}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Street</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="text"
                    placeholder="Street"
                    colorScheme="blackAlpha"
                    name="currentStreet"
                    value={formData.currentStreet}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Postal</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="text"
                    placeholder="Postal"
                    colorScheme="blackAlpha"
                    name="currentPostal"
                    value={formData.currentPostal}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>

            <FormLabel color="gray.500" my="1.5em">
              Permanent Address:
            </FormLabel>
            <HStack>
              <Box w="50%">
                <FormLabel>Country</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="text"
                    placeholder="Country"
                    colorScheme="blackAlpha"
                    name="permanentCountry"
                    value={formData.permanentCountry}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Province/Region</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="text"
                    placeholder="Province/Region"
                    colorScheme="blackAlpha"
                    name="permanentProvinceRegion"
                    value={formData.permanentProvinceRegion}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Town/City</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="text"
                    placeholder="Town/City"
                    colorScheme="blackAlpha"
                    name="permanentTownCity"
                    value={formData.permanentTownCity}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Street</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="text"
                    placeholder="Street"
                    colorScheme="blackAlpha"
                    name="permanentStreet"
                    value={formData.permanentStreet}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Postal</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="text"
                    placeholder="Postal"
                    colorScheme="blackAlpha"
                    name="permanentPostal"
                    value={formData.permanentPostal}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>

            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Cellphone No</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="number"
                    placeholder="XXX-XXX-XXXX"
                    colorScheme="blackAlpha"
                    name="cellphoneNo"
                    value={formData.cellphoneNo}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Phone No</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="number"
                    placeholder="XXX-XXX-XXXX"
                    colorScheme="blackAlpha"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
            </HStack>
            <HStack mt="2em">
              <Box w="50%">
                <FormLabel>Contact person</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="text"
                    placeholder="Contact person"
                    colorScheme="blackAlpha"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={(e) => handleChangeFormData(e)}
                    pb="-10em"
                  />
                </InputGroup>
              </Box>
              <Box w="50%">
                <FormLabel>Contact number</FormLabel>
                <InputGroup mt="0.75em" size="md">
                  <Input
                    type="number"
                    placeholder="XXX-XXX-XXXX"
                    colorScheme="blackAlpha"
                    name="contactNumber"
                    value={formData.contactNumber}
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
                onClick={() => setActiveStep(3)}
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

export default RegisterStepContactDetail;
