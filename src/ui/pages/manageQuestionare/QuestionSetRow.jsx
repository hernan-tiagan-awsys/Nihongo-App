import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Text,
} from "@chakra-ui/react";

const QuestionSetRow = () => {
  return (
    <Box mx="-1em">
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <ChevronRightIcon /> Questions Set 1:
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <HStack ml="1em">
              <ChevronRightIcon />
              <Text
                cursor="pointer"
                onClick={() => navigate(`/n${level}/${type}/${set}`)}
              >
                1
              </Text>
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
export default QuestionSetRow;
