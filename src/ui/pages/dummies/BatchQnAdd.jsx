import {
  AbsoluteCenter,
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { addQuestions } from "../../../logic/services/apiQuestions";

function BatchQnAdd() {
  const toast = useToast();
  const [setting, setSettings] = useState({
    level: "",
    set: "",
    type: "",
  });

  async function runQuery(questions) {
    const isAdded = await addQuestions(questions);

    if (isAdded.status) {
      toast({
        title: "Questions Added Successfully!",
        position: "top",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Questions Not Added!",
        position: "top",
        status: "error",
        description: `${isAdded.json.error}`,
        duration: 3000,
        isClosable: true,
      });
    }
  }

  function handleSumbit() {
    const arr = [];
    let val = "";
    try {
      val = document.getElementById("textArea").value;
    } catch (error) {
      console.warn(error);
    }
    val.split("|").map((str) => {
      let splitted = str.split(",");
      arr.push({
        answer: splitted[Number(splitted[5].trim())].trim(),
        level: Number(setting.level.trim()),
        options: [
          splitted[1].trim(),
          splitted[2].trim(),
          splitted[3].trim(),
          splitted[4].trim(),
        ],
        optionsTranslate: ["", "", "", ""],
        question: splitted[0].trim(),
        questionTranslate: "",
        set: Number(setting.set.trim()),
        type: setting.type.trim(),
      });
    });
    runQuery(arr);
  }
  return (
    <Box minH="100vh" minW="100vw">
      <AbsoluteCenter>
        <VStack bg="white" p="2.5em">
          <Textarea
            id="textArea"
            p="1em"
            minH="50vh"
            minW="50vw"
            // onChange={(e) => {
            //   console.log(e.target.value);
            // }}
          ></Textarea>
          <HStack>
            <InputGroup>
              <Input
                name="level"
                type="text"
                placeholder="level"
                onChange={(e) =>
                  setSettings({ ...setting, level: e.target.value })
                }
              />
              <Input
                name="set"
                type="text"
                placeholder="set"
                onChange={(e) =>
                  setSettings({ ...setting, set: e.target.value })
                }
              />
              <Input
                name="type"
                type="text"
                placeholder="vocab,kanji,grammar"
                onChange={(e) =>
                  setSettings({ ...setting, type: e.target.value })
                }
              />
            </InputGroup>
            <Button onClick={handleSumbit}>Submit</Button>
          </HStack>
        </VStack>
      </AbsoluteCenter>
    </Box>
  );
}

export default BatchQnAdd;
