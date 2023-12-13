import React, { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
  Button,
  useDisclosure,
  useBoolean,
  TableContainer,
  useToast,
  HStack,
  Spacer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  useColorMode,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { FiCheckCircle, FiPlusCircle } from "react-icons/fi";
import SideBar from "../../components/SideBar";
import ThemeColors from "../main/ThemeColors";
import QuestionRow from "./QuestionRow";
import AddViewEditQuestion from "./AddViewEditQuestion";

import { addQuestions } from "../../../logic/services/apiQuestions";
import AlerPopUp from "../../components/AlerPopUp";
import QuestionType from "../questionHomePage/QuestionType";
import ManageQuestionKanji from "./ManageQuestionKanji";
import ManageQuestionVocab from "./ManageQuestionVocab";
import ManageQuestionGrammar from "./ManageQuestionGrammar";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
//   const [display, changeDisplay] = useState("hide");
function ManageQuestioner() {
  const toast = useToast();
  const [questions, setQuestions] = useState([]);
  const [isView, setIsView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [qnPreview, setQnPreview] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentlySelectedKanji, setCurrentlySelectedKanji] = useState("none");
  const [currentlySelectedVocab, setCurrentlySelectedVocab] = useState("none");
  const [currentlySelectedGrammar, setCurrentlySelectedGrammar] =
    useState("none");
  const numberOfLevel = [1, 2, 3, 4, 5];
  // For delete all button
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure({
    closeOnOverlayClick: false,
    closeOnEsc: false,
  });

  const [toggle, setToggle] = useBoolean();
  const { bg, fontColor, body, hover, border } = ThemeColors();
  const colorMode = useColorMode().colorMode;
  function handleClearBtn() {
    onAlertClose();
    setQuestions([]);
    localStorage.removeItem("questions");
  }

  async function handleSubmit() {
    setIsLoading(true);
    // questionDispatch({ type: "addQuestion", payload: questions[0] });
    const isAdded = await addQuestions(questions);

    if (isAdded.status) {
      toast({
        title: "Questions Added Successfully!",
        position: "top",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
      handleClearBtn();
    } else {
      toast({
        title: "Questions Not Added!",
        position: "top",
        status: "error",
        description: `${isAdded.json.error}`,
        duration: 3000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  }

  function deleteQuestion(i) {
    const updatedQuestions = questions.filter((qn, index) => index !== i);
    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    console.log(updatedQuestions);
    setQuestions(updatedQuestions);
  }

  useEffect(() => {
    const getLSQuestions = JSON.parse(localStorage.getItem("questions"));
    getLSQuestions && setQuestions(getLSQuestions);
  }, []);

  return (
    <Box bg={body}>
      <SideBar toggle={toggle} onClick={setToggle.toggle} />
      {/* Just render this if it is open, viewed or edit */}
      {(isOpen || isView || isEdit) && (
        <Box h="10%" alignSelf="flex-end">
          <AddViewEditQuestion
            isAdd={isOpen}
            onClose={onClose}
            setQuestions={setQuestions}
            isView={isView}
            setIsView={setIsView}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            qnPreview={qnPreview}
            previewIndex={previewIndex}
          />
        </Box>
      )}
      <Flex
        h={"100vh"}
        w={"100%"}
        //   marginLeft={toggle ? { base: "0px", xl: "25rem" } : "0px"}
        transition={"800ms"}
        pl={toggle ? "25vw" : "8vw"}
        pr={"5vw"}
        pt="10vh"
        flexDir={"column"}
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
        <Box mt="3vh" minH="80vh" pb={{ base: "10vh", lg: "2em" }}>
          <Tabs
            variant="soft-rounded"
            colorScheme={colorMode === "light" ? "blackAlpha" : "whiteAlpha"}
          >
            {/*Start of Headers at the very top of the page */}
            {/* ======================================================================================= */}
            <HStack bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
              <Heading fontSize="1.75em">Manage Questionnaires</Heading>
              <Spacer />
              <TabList>
                <Tab>
                  <Text color={fontColor}>Add Question</Text>
                </Tab>
                <Tab>
                  <Text color={fontColor}>Delete Question</Text>
                </Tab>
              </TabList>
            </HStack>
            {/* ======================================================================================= */}
            <TabPanels>
              {/*Start of add questions list panel */}
              <TabPanel>
                {/*Start of add questions list header */}
                {/* ======================================================================================= */}
                <HStack
                  mb="1em"
                  bg={bg}
                  p="1em"
                  boxShadow="lg"
                  borderRadius="lg"
                >
                  <Heading fontSize="1.25em">List of Questions to Add</Heading>
                  <Spacer />
                  <Button
                    size="sm"
                    my="-1em"
                    fontSize="0.75em"
                    variant="outline"
                    leftIcon={<FiPlusCircle />}
                    onClick={onOpen}
                    bg={bg}
                    borderColor={border}
                  >
                    Add Question
                  </Button>
                </HStack>
                {/* ======================================================================================= */}
                {/* For Adding questions */}
                <Box bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
                  <TableContainer
                    maxH="50vh"
                    overflowY="visible"
                    borderRadius="lg"
                    sx={{
                      "&::-webkit-scrollbar": {
                        width: "10px",
                        backgroundColor: `rgba(0, 0, 0, 0.15)`,
                        borderRightRadius: "lg",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: `rgba(0, 0, 0, 0.15)`,
                        borderRightRadius: "lg",
                      },
                    }}
                    bg={bg}
                  >
                    {/*Start of add questions table header */}
                    {/* ======================================================================================= */}
                    <Table>
                      <Thead position="sticky" zIndex={3} top={0} bg={hover}>
                        <Tr color={fontColor}>
                          <Th w="5%">ID</Th>
                          <Th w="5%">Level</Th>
                          <Th w="10%">Type</Th>
                          <Th w="5%">Set</Th>
                          <Th w="100%">Question</Th>
                          <Th w="10%" textAlign="center">
                            Action
                          </Th>
                        </Tr>
                      </Thead>
                      {/*Start of add questions body */}
                      {/* ======================================================================================= */}
                      <Tbody borderTopRadius="lg">
                        {questions.map((question, index) => (
                          <QuestionRow
                            question={question}
                            key={index}
                            index={index}
                            setIsView={setIsView}
                            setQnPreview={setQnPreview}
                            deleteQuestion={deleteQuestion}
                            setIsEdit={setIsEdit}
                            setPreviewIndex={setPreviewIndex}
                          />
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                  {/*Start of add questions button group */}
                  {/*Start of add questions only visible if more than one question is present */}
                  {/* ======================================================================================= */}
                  <Flex mt="1.5em" mb="0.5em">
                    <Button
                      ms="auto"
                      bg="red.500"
                      colorScheme="red"
                      hidden={questions.length < 1}
                      me={4}
                      onClick={onAlertOpen}
                    >
                      Delete All
                    </Button>
                    {/*A confirmation popup for deleting*/}
                    {/* ======================================================================================= */}
                    <AlerPopUp
                      isOpen={isAlertOpen}
                      onClose={onAlertClose}
                      onClick={handleClearBtn}
                    />
                    {/* ======================================================================================= */}
                    <Button
                      isLoading={isLoading}
                      hidden={questions.length < 1}
                      bg="green.500"
                      colorScheme="green"
                      leftIcon={<FiCheckCircle />}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Flex>
                </Box>
                {/* ======================================================================================= */}
              </TabPanel>
              {/* ======================================================================================= */}
              {/* For Deleteing Questions */}
              <TabPanel>
                {/* ======================================================================================= */}
                <HStack
                  mb="1em"
                  bg={bg}
                  p="1em"
                  boxShadow="lg"
                  borderRadius="lg"
                >
                  <Heading
                    fontSize="1.25em"
                    onClick={() => console.log(currentlySelected)}
                  >
                    List of Questions
                  </Heading>
                </HStack>
                {/* ======================================================================================= */}
                <Box bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
                  <QuestionType type="Kanji" bg={bg}>
                    {numberOfLevel.map((num, index) => (
                      <ManageQuestionKanji
                        index={index + 1}
                        key={index}
                        type="Kanji"
                        currentlySelected={currentlySelectedKanji}
                        setCurrentlySelected={setCurrentlySelectedKanji}
                      ></ManageQuestionKanji>
                    ))}
                  </QuestionType>
                </Box>
                {/* ======================================================================================= */}
                <Box
                  bg={bg}
                  p="1em"
                  my="1.5em"
                  boxShadow="lg"
                  borderRadius="lg"
                >
                  <QuestionType type="Vocab" bg={bg}>
                    {numberOfLevel.map((num, index) => (
                      <ManageQuestionVocab
                        index={index + 1}
                        key={index}
                        type="Vocab"
                        currentlySelected={currentlySelectedVocab}
                        setCurrentlySelected={setCurrentlySelectedVocab}
                      ></ManageQuestionVocab>
                    ))}
                  </QuestionType>
                </Box>
                {/* ======================================================================================= */}
                <Box bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
                  <QuestionType type="Grammar" bg={bg}>
                    {numberOfLevel.map((num, index) => (
                      <ManageQuestionGrammar
                        index={index + 1}
                        key={index}
                        type="Grammar"
                        currentlySelected={currentlySelectedGrammar}
                        setCurrentlySelected={setCurrentlySelectedGrammar}
                      ></ManageQuestionGrammar>
                    ))}
                  </QuestionType>
                </Box>
                {/* ======================================================================================= */}
              </TabPanel>
            </TabPanels>
            {/* ======================================================================================= */}
          </Tabs>
        </Box>
      </Flex>
    </Box>
  );
}
export default ManageQuestioner;
