import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Heading,
  Image,
  Center,
  Input,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Text,
  Divider,
  Box,
  Grid,
  GridItem,
  HStack,
  VStack,
  Spacer,
  Container,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import React from "react";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";
import ThemeColors from "../main/ThemeColors";
import UserProfileDrawerButton from "./UserProfileDrawerButton";

const UserProfile = () => {
  const { body, bg, border, fontColor, success, error, warning, info, hover } =
    ThemeColors();
  const { user } = useUserContext();
  return (
    <Grid
      position="fixed"
      minW="100vw"
      minH="90vh"
      mt="10vh"
      templateColumns="repeat(11, 1fr)"
      gap={5}
    >
      <GridItem colSpan={2}>
        <Box
          ml="1vw"
          bg={bg}
          boxShadow="lg"
          roundedTopLeft="xl"
          roundedBottomLeft="xl"
          minH="86vh"
        >
          <VStack mt="2.5vh" spacing={2} align="stretch">
            <Spacer mt="5vh" />
            <UserProfileDrawerButton icon={<ChevronRightIcon ml="2vw" />}>
              User Profile
            </UserProfileDrawerButton>
            <Divider my="1.5vh" />
            <UserProfileDrawerButton icon={<ChevronRightIcon ml="2vw" />}>
              Button 1
            </UserProfileDrawerButton>
            <UserProfileDrawerButton icon={<ChevronRightIcon ml="2vw" />}>
              Button 2
            </UserProfileDrawerButton>
            <UserProfileDrawerButton icon={<ChevronRightIcon ml="2vw" />}>
              Button 3
            </UserProfileDrawerButton>
            <Divider my="1.5vh" />
            <UserProfileDrawerButton icon={<ChevronRightIcon ml="2vw" />}>
              Button 4
            </UserProfileDrawerButton>
            <UserProfileDrawerButton icon={<ChevronRightIcon ml="2vw" />}>
              Button 5
            </UserProfileDrawerButton>
          </VStack>
        </Box>
      </GridItem>
      <GridItem colSpan={6}>
        <Box
          boxShadow="lg"
          bg={bg}
          minW="90%"
          mt="2.5vh"
          maxH="86vh"
          minH="86vh"
          overflow="auto"
          overscrollBehavior="auto"
          sx={{
            "&::-webkit-scrollbar": {
              width: "10px",
              borderRadius: "8px",
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
          }}
        >
          <Container pt="5vh" minW="90%">
            <Heading pb={4} fontSize="5vh">
              User Profile
            </Heading>
            <Divider my="1.5vh" />
            <Heading pb={4} mb="2vh" fontSize="2.5vh" fontWeight="normal">
              Personal Information :
            </Heading>
            <VStack>
              {/* Name */}
              <InputGroup mb="2vh">
                <InputLeftAddon fontSize="1.75vh" minW="5vw" children="Name:" />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="First Name"
                  isReadOnly
                />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="Middle Name"
                  isReadOnly
                />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="Last Name"
                  isReadOnly
                />
              </InputGroup>

              {/* Japanese Name */}
              <InputGroup mb="2vh">
                <InputLeftAddon fontSize="1.75vh" minW="5vw" children="名前:" />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="フルスト名前"
                  isReadOnly
                />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="ミッヅロ名前"
                  isReadOnly
                />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="ラスト名前"
                  isReadOnly
                />
              </InputGroup>

              {/* Nickname */}
              <HStack minW="100%" mb="2vh">
                <InputGroup>
                  <InputLeftAddon
                    fontSize="1.75vh"
                    minW="5vw"
                    children="Nickname:"
                  />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    value="Toto"
                    isReadOnly
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon fontSize="1.75vh" children="ニックネーム:" />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    Value="とと"
                    isReadOnly
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon fontSize="1.75vh" children="Suffix:" />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    Value="Sr."
                    isReadOnly
                  />
                </InputGroup>
              </HStack>
            </VStack>
            <Divider my="1.5vh" />
            <Heading pb={4} mb="2vh" fontSize="2.5vh" fontWeight="normal">
              Current Job Information :
            </Heading>
            <VStack>
              <HStack minW="100%" mb="2vh">
                <InputGroup mb="2vh">
                  <InputLeftAddon
                    fontSize="1.75vh"
                    minW="5vw"
                    children="Current Job Title:"
                  />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    value="Jr. R&D Engineer"
                    isReadOnly
                  />
                </InputGroup>
                <InputGroup mb="2vh">
                  <InputLeftAddon
                    fontSize="1.75vh"
                    minW="5vw"
                    children="Company Name:"
                  />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    value="Advanced World Solutions, Inc"
                    isReadOnly
                  />
                </InputGroup>
              </HStack>

              <HStack minW="100%" mb="2vh">
                <InputGroup mb="2vh">
                  <InputLeftAddon
                    fontSize="1.75vh"
                    minW="5vw"
                    children="Business Unit:"
                  />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    value="Dev G"
                    isReadOnly
                  />
                </InputGroup>
                <InputGroup mb="2vh">
                  <InputLeftAddon
                    fontSize="1.75vh"
                    minW="5vw"
                    children="Location:"
                  />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    value="Cebu IT Park"
                    isReadOnly
                  />
                </InputGroup>
              </HStack>

              <HStack minW="100%" mb="2vh">
                <InputGroup mb="2vh">
                  <InputLeftAddon
                    fontSize="1.75vh"
                    minW="5vw"
                    children="Division:"
                  />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    value="ESD"
                    isReadOnly
                  />
                </InputGroup>
                <InputGroup mb="2vh">
                  <InputLeftAddon
                    fontSize="1.75vh"
                    minW="5vw"
                    children="Solution Development Group:"
                  />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    value="SDG2"
                    isReadOnly
                  />
                </InputGroup>
              </HStack>
            </VStack>

            <Divider my="1.5vh" />
            <Heading pb={4} mb="2vh" fontSize="2.5vh" fontWeight="normal">
              Contact Information :
            </Heading>
            <VStack>
              {/* Current Address */}
              <InputGroup mb="2vh">
                <InputLeftAddon fontSize="1.75vh" children="Current:" />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="Street"
                  isReadOnly
                />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="Town/City"
                  isReadOnly
                />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="Province/Region"
                  isReadOnly
                />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="Country"
                  isReadOnly
                />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="Postal"
                  isReadOnly
                />
              </InputGroup>

              {/* Permanent Address*/}
              <InputGroup mb="2vh">
                <InputLeftAddon fontSize="1.75vh" children="Permanent:" />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="Street"
                  isReadOnly
                />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="Town/City"
                  isReadOnly
                />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="Province/Region"
                  isReadOnly
                />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="Country"
                  isReadOnly
                />
                <Input
                  fontSize="1.75vh"
                  pl="1vw"
                  type="text"
                  variant="flushed"
                  value="Postal"
                  isReadOnly
                />
              </InputGroup>

              {/* Contact Number */}
              <HStack minW="100%" mb="2vh">
                <InputGroup mb="2vh">
                  <InputLeftAddon
                    fontSize="1.75vh"
                    minW="5vw"
                    children="Cellphone No:"
                  />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    value="XXX-XXX-XXXX"
                    isReadOnly
                  />
                </InputGroup>
                <InputGroup mb="2vh">
                  <InputLeftAddon
                    fontSize="1.75vh"
                    minW="5vw"
                    children="Phone No:"
                  />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    value="XXX-XXX-XXXX"
                    isReadOnly
                  />
                </InputGroup>
              </HStack>

              {/* Contact Person */}
              <HStack minW="100%" mb="2vh">
                <InputGroup mb="2vh">
                  <InputLeftAddon
                    fontSize="1.75vh"
                    minW="5vw"
                    children="Contact person:"
                  />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    value="XXX-XXX-XXXX"
                    isReadOnly
                  />
                </InputGroup>
                <InputGroup mb="2vh">
                  <InputLeftAddon
                    fontSize="1.75vh"
                    minW="5vw"
                    children="Contact number:"
                  />
                  <Input
                    fontSize="1.75vh"
                    pl="1vw"
                    type="text"
                    variant="flushed"
                    value="XXX-XXX-XXXX"
                    isReadOnly
                  />
                </InputGroup>
              </HStack>
            </VStack>
          </Container>
        </Box>
      </GridItem>
      <GridItem colSpan={3} bg="transparent">
        <Card mr="1vw" my="2.5vh" bg="transparent">
          <CardHeader
            minH="20vh"
            roundedTopRight="xl"
            backgroundImage="url('https://i.imgur.com/2dXLNMH.jpg')"
            backgroundSize="cover"
            backgroundPosition="top"
          >
            <Center position="relative" top="10vh">
              <Image
                borderRadius="full"
                boxSize="8vw"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Center>
          </CardHeader>
          <CardBody minH="60vh" bg={bg}>
            <Box mt="7vh">
              <Heading fontWeight="normal" textAlign="center" fontSize="3vh">
                @{user.username}
              </Heading>
              <Divider my="1vh" />
              <Text fontWeight="normal" textAlign="center">
                {user.email}
              </Text>
            </Box>
          </CardBody>
          <CardFooter
            minH="5vh"
            bg="purple"
            roundedBottomRight="xl"
            backgroundImage="url('https://i.imgur.com/2dXLNMH.jpg')"
            backgroundSize="cover"
            backgroundPosition="bottom"
          ></CardFooter>
        </Card>
      </GridItem>
    </Grid>

    //Second Change

    // <Grid
    //   h="140vh"
    //   templateRows="repeat(8, 1fr)"
    //   templateColumns="repeat(8, 1fr)"
    //   gap={4}
    //   bg={bg}
    // >
    //   <GridItem rowSpan={1} colSpan={8} />
    //   <GridItem rowSpan={1} colSpan={2} />
    //   <GridItem rowSpan={1} colSpan={3}>
    //     <Heading pb={4} size="md">
    //       User Profile
    //     </Heading>
    //     <Stack direction="row">
    //       <Stack>
    //         <FormControl>
    //           <FormLabel>First Name</FormLabel>
    //           <Input type="firstName" placeholder="First Name" />
    //         </FormControl>
    //         <FormControl>
    //           <FormLabel>Birthday</FormLabel>
    //           <Input type="lastName" placeholder="Birthday" />
    //         </FormControl>
    //         <FormControl>
    //           <FormLabel>Email</FormLabel>
    //           <Input type="cellNumber" placeholder="Email" />
    //         </FormControl>
    //       </Stack>
    //       <Divider orientation="vertical" />
    //       <Stack>
    //         <FormControl>
    //           <FormLabel>Last Name</FormLabel>
    //           <Input type="userName" placeholder="Last Name" />
    //         </FormControl>
    //         <FormControl>
    //           <FormLabel>Gender</FormLabel>
    //           <Input type="email" placeholder="Gender" />
    //         </FormControl>
    //         <FormControl>
    //           <FormLabel>Phone</FormLabel>
    //           <Input type="email" placeholder="Phone" />
    //         </FormControl>
    //       </Stack>
    //     </Stack>
    //   </GridItem>
    //   <GridItem rowSpan={1} colSpan={3}>
    //     {/* <Image
    //                     //objectFit='cover'
    //                     maxW={{ base: '100%', sm: '200px' }}
    //                     src="src\assets\character_boy_normal.png"
    //                     alt='pictureForUserProfile'
    //                     boxSize="150px"
    //                     borderRadius="full"
    //                 /> */}
    //     {/* User Profile Card*/}
    //     <HomeUserProfileCard />
    //   </GridItem>
    //   <GridItem rowSpan={1} colSpan={2} />
    //   <GridItem rowSpan={1} colSpan={4}>
    //     <Heading pb={4} size="md">
    //       Address
    //     </Heading>
    //     <Stack direction="row">
    //       <Stack>
    //         <FormControl>
    //           <FormLabel>Address</FormLabel>
    //           <Input type="firstName" placeholder="Address" />
    //         </FormControl>
    //         <FormControl>
    //           <FormLabel>City</FormLabel>
    //           <Input type="lastName" placeholder="City" />
    //         </FormControl>
    //       </Stack>
    //       <Divider orientation="vertical" />
    //       <Stack>
    //         <FormControl>
    //           <FormLabel>Number</FormLabel>
    //           <Input type="userName" placeholder="Number" />
    //         </FormControl>
    //         <FormControl>
    //           <FormLabel>Zip</FormLabel>
    //           <Input type="email" placeholder="Zip" />
    //         </FormControl>
    //       </Stack>
    //     </Stack>
    //   </GridItem>
    //   <GridItem rowSpan={1} colSpan={3} />
    //   <GridItem rowSpan={1} colSpan={2}>
    //     <Wrap spacing={4} pt={4}>
    //       <WrapItem>
    //         <Button colorScheme="blue">Save All</Button>
    //       </WrapItem>
    //       {/* <WrapItem>
    //                         <Button colorScheme='red'>Cancel</Button>
    //                     </WrapItem> */}
    //     </Wrap>
    //   </GridItem>
    // </Grid>

    //First Change

    // <Box pt={"7vw"} pb={"5vw"}>
    //     <Box
    //     pl={"1.5vw"}
    //     >
    //         <Box
    //         minW="30vw"
    //         mr="60vw"
    //         bg={bg}
    //         p="5"
    //         borderRadius="10"
    //         boxShadow="lg"
    //         >
    //             <Heading pb={4} size='md'>
    //                 User Profile
    //             </Heading>
    //             <Stack direction='row'>
    //                 <Stack>
    //                     <FormControl>
    //                         <FormLabel>First Name</FormLabel>
    //                         <Input type='firstName' placeholder='First Name' />
    //                     </FormControl>
    //                     <FormControl>
    //                     <FormLabel>Birthday</FormLabel>
    //                         <Input type='lastName' placeholder='Birthday' />
    //                     </FormControl>
    //                     <FormControl>
    //                         <FormLabel>Email</FormLabel>
    //                         <Input type='cellNumber' placeholder='Email' />
    //                     </FormControl>
    //                 </Stack>
    //                 <Divider orientation='vertical' />
    //                 <Stack>
    //                     <FormControl>
    //                         <FormLabel>Last Name</FormLabel>
    //                         <Input type='userName' placeholder='Last Name' />
    //                     </FormControl>
    //                     <FormControl>
    //                         <FormLabel>Gender</FormLabel>
    //                         <Input type='email' placeholder='Gender' />
    //                     </FormControl>
    //                     <FormControl>
    //                         <FormLabel>Phone</FormLabel>
    //                         <Input type='email' placeholder='Phone' />
    //                     </FormControl>
    //                 </Stack>
    //             </Stack>
    //             <Divider ml="35vw" maxW="30vw" my="2.5vh" />
    //             <Heading pb={4} size='md'>
    //                 Address
    //             </Heading>
    //             <Stack direction='row'>
    //                 <Stack>

    //                     <FormControl>
    //                         <FormLabel>Address</FormLabel>
    //                         <Input type='firstName' placeholder='Address' />
    //                     </FormControl>
    //                     <FormControl>
    //                         <FormLabel>City</FormLabel>
    //                         <Input type='lastName' placeholder='City' />
    //                     </FormControl>
    //                 </Stack>
    //                 <Divider orientation='vertical' />
    //                 <Stack>
    //                     <FormControl>
    //                         <FormLabel>Number</FormLabel>
    //                         <Input type='userName' placeholder='Number' />
    //                     </FormControl>
    //                     <FormControl>
    //                         <FormLabel>Zip</FormLabel>
    //                         <Input type='email' placeholder='Zip' />
    //                     </FormControl>
    //                 </Stack>
    //             </Stack>
    //         </Box>

    //         <Box position="fixed" minW="30vw" ml="2.5vw">
    //             <Card variant="outlined" bg="transparent" boxShadow="lg">
    //                 <CardHeader
    //                 roundedTop="xl"
    //                 minH="20vh"
    //                 backgroundImage="url('src/assets/josh-hild-2oDMoju8bfk-unsplash.jpg')"
    //                 backgroundSize="cover"
    //                 backgroundPosition="center"
    //                 >
    //                 <Center position="relative" top="15vh">
    //                     <Image
    //                     borderRadius="full"
    //                     boxSize="150px"
    //                     src="https://bit.ly/dan-abramov"
    //                     alt="Dan Abramov"
    //                     />
    //                 </Center>
    //                 </CardHeader>
    //                 <CardBody minH="35vh" bg={bg}>
    //                 <Box minH="12.5vh"></Box>
    //                 <Heading fontWeight="normal" textAlign="center">
    //                     @{user.username}
    //                 </Heading>
    //                 <Divider />
    //                 <Text fontWeight="normal" textAlign="center">
    //                     {user.email}
    //                 </Text>
    //                 </CardBody>
    //                 <CardFooter roundedBottom="xl" minH="20vh" bg={bg}></CardFooter>
    //             </Card>
    //             </Box>

    //     </Box>
    // </Box>
  );
};
export default UserProfile;
