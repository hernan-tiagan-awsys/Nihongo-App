import { ExternalLinkIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Image,
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Button,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Center,
  Divider,
  SimpleGrid,
  Box,
  Container,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CharacterPracticeTest from "../../components/landingPage/CharacterPracticeTest";
import KanjiQuestionSample from "../../components/landingPage/KanjiQuestionSample";
import VocabQuestionSample from "../../components/landingPage/VocabQuestionSample";
import GrammarQuestionSample from "../../components/landingPage/GrammarQuestionSample";
import Loader from "../../components/Loader";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";
import ThemeColors from "../main/ThemeColors";

export default function LandingPage() {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const element = document.getElementById("sampleQuestions");
  const navigate = useNavigate();

  const { user, isLoading } = useUserContext();

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <Box
        h="100vh"
        overflow="auto"
        overscrollBehavior="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "12px",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          },
        }}
      >
        {/* Banner */}
        <Grid
          h="100vh"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(8, 1fr)"
          gap={4}
          bg={bg}
        >
          <GridItem rowSpan={1} colSpan={8} />
          <GridItem rowSpan={3} colSpan={1} />

          <GridItem
            rowSpan={3}
            colSpan={3}
            justifyContent="center"
            alignContent="center"
          >
            <Image
              src="https://i.imgur.com/WtVPZmS.png"
              alt="pictureForLandingPage"
            ></Image>
          </GridItem>
          <GridItem rowSpan={3} colSpan={3}>
            <Grid
              h="100%"
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(1, 1fr)"
            >
              <GridItem rowSpan={1} />
              <GridItem rowSpan={1}>
                <Card bg={"transparent"} variant={"unstyled"}>
                  <CardHeader my={"5"}>
                    <Heading fontSize="3vw">日本語のアプリ</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text fontSize="1vw">
                      Cras a risus ex. In auctor faucibus dolor sit amet
                      condimentum. Maecenas sed orci vitae ligula commodo dictum
                      sit amet quis tellus. Maecenas et viverra lacus. Morbi sit
                      amet ex libero. Praesent sagittis sapien ac fermentum
                      laoreet. Mauris semper sem urna, nec viverra ante eleifend
                      sit amet. Phasellus venenatis sagittis scelerisque.
                      Quisque elit augue, sodales sit amet bibendum a, tempor
                      eget mi. Proin finibus lectus vitae nisi congue hendrerit.
                    </Text>
                    <Button
                      my={"5"}
                      variant={"outline"}
                      bg={"transparent"}
                      borderColor={border}
                      onClick={() => {
                        const element =
                          document.getElementById("sampleQuestions");
                        element.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Take a Look
                    </Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem rowSpan={1} />
            </Grid>
          </GridItem>

          <GridItem rowSpan={3} />
          <GridItem rowSpan={1} colSpan={8} textAlign="center">
            <Heading mt="5vh" fontSize="3vw">
              --- UNDER DEVELOPMENT ---
            </Heading>
          </GridItem>
        </Grid>
        {/* Banner */}
        <Divider />
        {/* Sample Questions */}
        <Center id="sampleQuestions" pt={"10"} pb={"5"} bg={bg}>
          <Heading fontSize="3vw">Sample Questions</Heading>
        </Center>
        <Tabs isFitted variant={"line"} colorScheme="white">
          <TabList mb="1em" bg={bg}>
            <Tab>
              <InfoOutlineIcon mx={"2"} />
              Kanji Questions
            </Tab>
            <Tab>
              <InfoOutlineIcon mx={"2"} />
              Vocab Questions
            </Tab>
            <Tab>
              <InfoOutlineIcon mx={"2"} />
              Grammar Questions
            </Tab>
          </TabList>
          <TabIndicator mt="-4" height="2px" bg={border} borderRadius="1px" />
          <TabPanels>
            <TabPanel>{<KanjiQuestionSample />}</TabPanel>
            <TabPanel>{<VocabQuestionSample />}</TabPanel>
            <TabPanel>{<GrammarQuestionSample />}</TabPanel>
          </TabPanels>
        </Tabs>
        {/* Sample Questions */}
        {/* Try out Questions Card */}
        <Divider />
        <Box id="tryItOutScrollLoc" maxW="100vw" bg={bg}>
          <Container maxW="80vw" py="10">
            <SimpleGrid columns={3} spacing={10}>
              <Box minH="25vh">
                <Card maxW="sm" bg={bg} variant="unstyled">
                  <CardBody>
                    <Heading size="md" py="2">
                      Kanji Questions
                    </Heading>
                    <Text>
                      Cras a risus ex. In auctor faucibus dolor sit amet
                      condimentum. Maecenas sed orci vitae ligula commodo dictum
                      sit amet quis tellus.
                    </Text>
                    <Button
                      mt={"5"}
                      variant={"ghost"}
                      bg={"transparent"}
                      borderColor={border}
                      onClick={() => {
                        user ? navigate("/Kanji") : navigate("/login");
                      }}
                      rightIcon={<ExternalLinkIcon ml={"2"} />}
                    >
                      Try it out
                    </Button>
                  </CardBody>
                </Card>
              </Box>
              <Box minH="25vh">
                <Card maxW="sm" bg={bg} variant="unstyled">
                  <CardBody>
                    <Heading size="md" py="2">
                      Vocab Questions
                    </Heading>
                    <Text>
                      Cras a risus ex. In auctor faucibus dolor sit amet
                      condimentum. Maecenas sed orci vitae ligula commodo dictum
                      sit amet quis tellus.
                    </Text>
                    <Button
                      mt={"5"}
                      variant={"ghost"}
                      bg={"transparent"}
                      borderColor={border}
                      onClick={() => {
                        user ? navigate("/vocab") : navigate("/login");
                      }}
                      rightIcon={<ExternalLinkIcon ml={"2"} />}
                    >
                      Try it out
                    </Button>
                  </CardBody>
                </Card>
              </Box>
              <Box minH="25vh">
                <Card maxW="sm" bg={bg} variant="unstyled">
                  <CardBody>
                    <Heading size="md" py="2">
                      Grammar Questions
                    </Heading>
                    <Text>
                      Cras a risus ex. In auctor faucibus dolor sit amet
                      condimentum. Maecenas sed orci vitae ligula commodo dictum
                      sit amet quis tellus.
                    </Text>
                    <Button
                      mt={"5"}
                      variant={"ghost"}
                      bg={"transparent"}
                      borderColor={border}
                      onClick={() => {
                        user ? navigate("/grammar") : navigate("/login");
                      }}
                      rightIcon={<ExternalLinkIcon ml={"2"} />}
                    >
                      Try it out
                    </Button>
                  </CardBody>
                </Card>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
        <Divider />
        {/* Try out Questions Card */}
        <Center id="sampleQuestions" pt={"10"} pb={"5"} bg={bg}>
          <Heading fontSize="3vw">Sample Exercises</Heading>
        </Center>
        <Tabs isFitted variant={"line"} colorScheme="white">
          <TabList mb="1em" bg={bg}>
            <Tab>
              <InfoOutlineIcon mx={"2"} />
              Hiragana Exercise
            </Tab>
            <Tab>
              <InfoOutlineIcon mx={"2"} />
              Katakana Exercise
            </Tab>
          </TabList>
          <TabIndicator mt="-4" height="2px" bg={border} borderRadius="1px" />
          <TabPanels>
            <TabPanel>{<CharacterPracticeTest mode="hir" />}</TabPanel>
            <TabPanel>{<CharacterPracticeTest mode="kat" />}</TabPanel>
          </TabPanels>
        </Tabs>
        {/* Try out Questions Card */}
        <Divider />
        <Box id="tryItOutScrollLoc" maxW="100vw" bg={bg}>
          <Container maxW="80vw" py="10">
            <SimpleGrid columns={2} spacing={10}>
              <Box minH="25vh">
                <Card maxW="sm" bg={bg} variant="unstyled">
                  <CardBody>
                    <Heading size="md" py="2">
                      Hiragana Exercise
                    </Heading>
                    <Text>
                      Cras a risus ex. In auctor faucibus dolor sit amet
                      condimentum. Maecenas sed orci vitae ligula commodo dictum
                      sit amet quis tellus.
                    </Text>
                    <Button
                      mt={"5"}
                      variant={"ghost"}
                      bg={"transparent"}
                      borderColor={border}
                      onClick={() => {
                        navigate("/hiragana");
                      }}
                      rightIcon={<ExternalLinkIcon ml={"2"} />}
                    >
                      Try it out
                    </Button>
                  </CardBody>
                </Card>
              </Box>
              <Box minH="25vh">
                <Card maxW="sm" bg={bg} variant="unstyled">
                  <CardBody>
                    <Heading size="md" py="2">
                      Katakana Exercise
                    </Heading>
                    <Text>
                      Cras a risus ex. In auctor faucibus dolor sit amet
                      condimentum. Maecenas sed orci vitae ligula commodo dictum
                      sit amet quis tellus.
                    </Text>
                    <Button
                      mt={"5"}
                      variant={"ghost"}
                      bg={"transparent"}
                      borderColor={border}
                      onClick={() => {
                        navigate("/katakana");
                      }}
                      rightIcon={<ExternalLinkIcon ml={"2"} />}
                    >
                      Try it out
                    </Button>
                  </CardBody>
                </Card>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
        <Divider />
        {/* Try out Questions Card */}
        {/* Banner */}
        <Grid
          h="100vh"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(8, 1fr)"
          gap={4}
          bg={bg}
        >
          <GridItem rowSpan={1} colSpan={8} />
          <GridItem rowSpan={3} colSpan={1} />

          <GridItem
            rowSpan={3}
            colSpan={3}
            justifyContent="center"
            alignContent="center"
          >
            <Image
              src="https://i.imgur.com/WtVPZmS.png"
              alt="pictureForLandingPage"
            ></Image>
          </GridItem>
          <GridItem rowSpan={3} colSpan={3}>
            <Grid
              h="100%"
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(1, 1fr)"
            >
              <GridItem rowSpan={1} />
              <GridItem rowSpan={1}>
                <Card bg={"transparent"} variant={"unstyled"}>
                  <CardHeader my={"5"}>
                    <Heading fontSize="3vw">日本語のアプリ</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text fontSize="1vw">
                      Cras a risus ex. In auctor faucibus dolor sit amet
                      condimentum. Maecenas sed orci vitae ligula commodo dictum
                      sit amet quis tellus. Maecenas et viverra lacus. Morbi sit
                      amet ex libero. Praesent sagittis sapien ac fermentum
                      laoreet. Mauris semper sem urna, nec viverra ante eleifend
                      sit amet. Phasellus venenatis sagittis scelerisque.
                      Quisque elit augue, sodales sit amet bibendum a, tempor
                      eget mi. Proin finibus lectus vitae nisi congue hendrerit.
                    </Text>
                    <Button
                      my={"5"}
                      variant={"outline"}
                      bg={"transparent"}
                      borderColor={border}
                      onClick={() => {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                          inline: "nearest",
                        });
                      }}
                    >
                      Take a Look
                    </Button>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem rowSpan={1} />
            </Grid>
          </GridItem>

          <GridItem rowSpan={3} />
          <GridItem rowSpan={1} colSpan={8} />
        </Grid>
        {/* Banner */}
      </Box>
    </>
  );
}
