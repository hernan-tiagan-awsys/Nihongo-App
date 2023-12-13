import { Badge, Box, Divider, Flex, Spacer, Text } from "@chakra-ui/react";

import KanaSelectorTab from "../kanas/KanaSelectorTab";
import ThemeColors from "../main/ThemeColors";
import { useNavigate } from "react-router-dom";
import HomeUserProfileCard from "../../components/HomeUserProfileCard";
import QuestionLevel from "../questionHomePage/QuestionLevel";
import QuestionType from "../questionHomePage/QuestionType";

export default function Home() {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const numberOfLevel = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  return (
    <>
      <Box data-testid="home-container" pb={"5vw"}>
        <Divider minH="10vh" />
        <Box
          pt={{ base: "2.5vh", lg: "5vh" }}
          h="90vh"
          pb={{ base: "10vh", lg: "0" }}
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
          {/* Home Page Start */}

          {/* User Profile Card*/}
          <HomeUserProfileCard />

          {/*Question Pages List*/}
          <Box
            ml={{ base: "2.5vw", lg: "35vw" }}
            maxW={{ base: "90vw", lg: "60vw" }}
          >
            {/*#region WIP */}
            <Box
              boxShadow="lg"
              py="1.5vh"
              px="2.5vh"
              bg={bg}
              borderRadius="lg"
              mb="2.25vh"
            >
              <Text
                textAlign="center"
                cursor="pointer"
                fontSize="2.25vh"
                onClick={() => {
                  navigate("/learnVocab");
                }}
              >
                日本語辞書　・　Japanese Dictionary
              </Text>
            </Box>
            {/*#endregion WIP */}

            {/*Nan's Kana Pages */}
            <KanaSelectorTab />

            {/* Divider */}
            <Divider maxW={{ base: "90vw", lg: "60vw" }} my="2.5vh" />
            {/* Divider */}

            {/* Kanji Questions Container */}
            <Box
              bg={bg}
              p="5"
              borderRadius="10"
              ml={{ base: "2.5vw", lg: "0vw" }}
              boxShadow="lg"
            >
              {/* Kanji Questions */}
              <QuestionType type="Kanji" bg={bg}>
                {numberOfLevel.map((num, index) => (
                  <QuestionLevel
                    index={index + 1}
                    key={index}
                    type="Kanji"
                  ></QuestionLevel>
                ))}
              </QuestionType>
            </Box>
            <Divider maxW={{ base: "90vw", lg: "60vw" }} my="2.5vh" />
            {/* Vocab Questions Container */}
            <Box
              bg={bg}
              p="5"
              ml={{ base: "2.5vw", lg: "0vw" }}
              borderRadius="10"
              boxShadow="lg"
            >
              {/* Vocab Questions */}
              <QuestionType type="Vocab" bg={bg}>
                {numberOfLevel.map((num, index) => (
                  <QuestionLevel index={index + 1} key={index} type="Vocab" />
                ))}
              </QuestionType>
            </Box>

            {/* Divider */}
            <Divider maxW={{ base: "90vw", lg: "60vw" }} my="2.5vh" />
            {/* Divider */}

            {/* Grammar Questions Container */}
            <Box
              bg={bg}
              p="5"
              ml={{ base: "2.5vw", lg: "0vw" }}
              borderRadius="10"
              boxShadow="lg"
            >
              {/* Grammar Questions */}
              <QuestionType type="Grammar" bg={bg}>
                {numberOfLevel.map((num, index) => (
                  <QuestionLevel index={index + 1} key={num} type="Grammar" />
                ))}
              </QuestionType>
            </Box>
          </Box>

          {/* Home Page End */}
          <Divider minH="5vh" />
        </Box>
      </Box>
    </>
  );
}
