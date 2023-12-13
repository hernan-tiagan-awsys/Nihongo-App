import {
  Button,
  Card,
  CardBody,
  CardHeader,
  GridItem,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import { scrollTo } from "scroll-js";

const QuestionSideSets = ({ bg, hoverColor, type, level, setHasSubmit }) => {
  const { countBySetVocab, countBySetGrammar, countBySetKanji } =
    useQuestionContext();
  const { dispatch: questionDispatch } = useQuestionContext();

  const { set } = useParams();
  const navigate = useNavigate();

  return (
    <GridItem colSpan="1" display={{ base: "none", lg: "inline-block" }}>
      <Card
        size={{ base: "sm", lg: "lg" }}
        boxShadow="lg"
        bgColor={bg}
        position={{ base: "fixed", lg: "sticky" }}
        top={{ base: "12.5vh", lg: "5.5vh" }}
      >
        <CardBody>
          <Text
            align="center"
            fontSize={{ base: "0.60em", lg: "1.25em" }}
            mb={{ base: "1.5vh", lg: "2.5vh" }}
          >
            {`${level.toUpperCase()} ${
              type[0].toUpperCase() + type.slice(1)
            } Sets`}
          </Text>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            align="stretch"
            textAlign="start"
            maxH="50vh"
            overflowY="auto"
            overflowX="hidden"
            overscrollBehavior="auto"
            sx={{
              "&::-webkit-scrollbar": {
                width: "8px",
                backgroundColor: `rgb(0, 0, 0,0.25)`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `rgba(0, 0, 0, 0.25 )`,
              },
            }}
          >
            {type == "kanji"
              ? countBySetKanji?.map((kanji) =>
                  kanji._id.level == level[1] ? (
                    <Button
                      minH="2.5em"
                      size={{ base: "xs", lg: "md" }}
                      isDisabled={kanji._id.set === set}
                      variant="ghost"
                      key={type + level + kanji._id.set}
                      fontWeight="light"
                      bg={kanji._id.set == set ? "blue.300" : bg}
                      _hover={
                        kanji._id.set == set
                          ? { bg: "blue.300" }
                          : { bg: hoverColor }
                      }
                      onClick={() => {
                        setHasSubmit(false);
                        scrollTo(
                          document.getElementById("questionLayoutContainer"),
                          { top: 0 }
                        );
                        navigate(
                          `/questions/${level}/${kanji._id.type}/${kanji._id.set}`
                        );
                      }}
                    >
                      <Text
                        fontSize={{
                          base: "0.75em",
                          lg: "1em",
                        }}
                      >
                        Question Set {kanji._id.set}
                      </Text>
                    </Button>
                  ) : null
                )
              : null}
            {type == "vocab"
              ? countBySetVocab?.map((vocab) =>
                  vocab._id.level == level[1] ? (
                    <Button
                      minH="2.5em"
                      isDisabled={vocab._id.set === set}
                      variant="ghost"
                      key={type + level + vocab._id.set}
                      fontWeight="light"
                      bg={vocab._id.set == set ? "blue.300" : bg}
                      _hover={
                        vocab._id.set == set
                          ? { bg: "blue.200" }
                          : { bg: hoverColor }
                      }
                      onClick={() => {
                        setHasSubmit(false);
                        questionDispatch({
                          type: "clearAnswers",
                        });
                        questionDispatch({
                          type: "clearAnswers",
                        });
                        scrollTo(
                          document.getElementById("questionLayoutContainer"),
                          { top: 0 }
                        );
                        navigate(
                          `/questions/${level}/${type}/${vocab._id.set}`
                        );
                      }}
                    >
                      Question Set {vocab._id.set}
                    </Button>
                  ) : null
                )
              : null}
            {type == "grammar"
              ? countBySetGrammar?.map((grammar) =>
                  grammar._id.level == level[1] ? (
                    <Button
                      minH="2.5em"
                      isDisabled={grammar._id.set === set}
                      variant="ghost"
                      key={type + level + grammar._id.set}
                      fontWeight="light"
                      bg={grammar._id.set == set ? "blue.300" : bg}
                      _hover={
                        grammar._id.set == set
                          ? { bg: "blue.200" }
                          : { bg: hoverColor }
                      }
                      onClick={() => {
                        setHasSubmit(false);
                        questionDispatch({
                          type: "clearAnswers",
                        });
                        scrollTo(
                          document.getElementById("questionLayoutContainer"),
                          { top: 0 }
                        );
                        navigate(
                          `/questions/${level}/${type}/${grammar._id.set}`
                        );
                      }}
                    >
                      Question Set {grammar._id.set}
                    </Button>
                  ) : null
                )
              : null}
          </VStack>
        </CardBody>
      </Card>
    </GridItem>
  );
};
export default QuestionSideSets;
