import {
  useColorModeValue,
  Grid,
  GridItem,
  Text,
  Container,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  VStack,
  StackDivider,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";

// import KanjiQuestionCard from "./KanjiQuestionCard";
import KanjiQuestionCard from "../../components/KanjiQuestionCard";
// import KanjiQuestionList from "./QuestionList";
import KanjiQuestionList from "../../components/QuestionList";

function KanjiQuestionPage() {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const [userHasAnswered, setUserHasAnswered] = useState([
    {
      questionNo: 0,
      isDone: false,
    },
  ]);

  function handleUserHasAnswered(questionNo, bool) {
    let check = false;
    for (const iterator of userHasAnswered) {
      if (iterator.questionNo === questionNo) {
        check = true;
      }
    }
    if (!check) {
      setUserHasAnswered([
        ...userHasAnswered,
        {
          questionNo: questionNo,
          isDone: bool,
        },
      ]);
    }
  }

  const questions = [
    {
      q: "1. お金。",
      choice1: "おちゃ",
      choice2: "おかし",
      choice3: "おさら",
      choice4: "おかね",
    },
    {
      q: "2. 八万円。",
      choice1: "はちまんえん",
      choice2: " はっせんえん",
      choice3: " はちばんえん",
      choice4: " はっけんえん",
    },
    {
      q: "3. 入って。",
      choice1: " いれって",
      choice2: "いって",
      choice3: "はって",
      choice4: "はいって",
    },
    {
      q: "4. 入って。",
      choice1: " いれって",
      choice2: "いって",
      choice3: "はって",
      choice4: "はいって",
    },
    {
      q: "5. 入って。",
      choice1: " いれって",
      choice2: "いって",
      choice3: "はって",
      choice4: "はいって",
    },
    {
      q: "6. 入って。",
      choice1: " いれって",
      choice2: "いって",
      choice3: "はって",
      choice4: "はいって",
    },
    {
      q: "7. 入って。",
      choice1: " いれって",
      choice2: "いって",
      choice3: "はって",
      choice4: "はいって",
    },
    {
      q: "8. 入って。",
      choice1: " いれって",
      choice2: "いって",
      choice3: "はって",
      choice4: "はいって",
    },
    {
      q: "9. 入って。",
      choice1: " いれって",
      choice2: "いって",
      choice3: "はって",
      choice4: "はいって",
    },
    {
      q: "10. 入って。",
      choice1: " いれって",
      choice2: "いって",
      choice3: "はって",
      choice4: "はいって",
    },
  ];

  return (
    <Container minW="95vw">
      <Grid
        h={"100%"}
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={5}
        pt="15vh"
      >
        <GridItem colSpan={"1"}>
          <Card boxShadow="lg" bgColor={bg}>
            <CardHeader>
              <Text fontSize={"1.5vw"}>Question Set</Text>
            </CardHeader>
            <CardBody>
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                align="stretch"
                textAlign="start"
              >
                <Button variant="ghost"> Question Set 1</Button>
                <Button variant="ghost"> Question Set 2</Button>
                <Button variant="ghost"> Question Set 3</Button>
                <Button variant="ghost"> Question Set 4</Button>
                <Button variant="ghost"> Question Set 5</Button>
              </VStack>
            </CardBody>
          </Card>
        </GridItem>
        {/* Question Window */}
        <GridItem colSpan={"2"}>
          <Container
            maxW={"50vw"}
            mb={"10"}
            p={"10"}
            bg={"white"}
            boxShadow="lg"
            bgColor={bg}
          >
            <Text fontSize="4xl">N4 Kanji Question Set</Text>
            {/* Question */}
            {questions.map((question, index) => {
              return (
                <KanjiQuestionCard
                  key={index}
                  index={index + 1}
                  question={question}
                  handleUserHasAnswered={handleUserHasAnswered}
                />
              );
            })}
            {/* Question */}
          </Container>
        </GridItem>
        {/* Question List */}
        <GridItem right="2.5vw" position="fixed" colSpan={"1"}>
          <Card boxShadow="md" bgColor={bg}>
            <CardHeader>
              <Text fontSize={"1.5vw"}>Questions</Text>
            </CardHeader>
            <CardBody>
              <SimpleGrid columns={5} gap={2}>
                <>
                  {questions.map((question, index) => {
                    return (
                      <KanjiQuestionList
                        key={index}
                        questionNo={index + 1}
                        userHasAnswered={userHasAnswered}
                      />
                    );
                  })}
                </>
              </SimpleGrid>
            </CardBody>
            <CardFooter justify={"end"}>
              <Button
                borderColor={border}
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("tryItOutScrollLoc");
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest",
                  });
                }}
              >
                Submit
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        {/* Question List */}
      </Grid>
    </Container>
  );
}

export default KanjiQuestionPage;
