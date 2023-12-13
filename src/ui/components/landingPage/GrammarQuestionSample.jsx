import {
  useColorModeValue,
  Grid,
  GridItem,
  Text,
  Container,
  SimpleGrid,
  Button,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Tag,
  TagLabel,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../../pages/main/ThemeColors";

function GrammarQuestionSample() {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  return (
    <>
      <Grid
        h={"100%"}
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={6}
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
        <GridItem colSpan={"2"}>
          {/* Question Window */}
          <Container
            maxW={"50vw"}
            mb={"10"}
            p={"10"}
            bg={"white"}
            boxShadow="lg"
            bgColor={bg}
          >
            {/* Question */}
            <Box>
              <Text fontSize={"1.25vw"} pb={"5"}>
                1. まいにちしんぶん　_______ 読みます。
              </Text>
              <SimpleGrid columns={2} spacing={10}>
                <Button borderColor={border} variant="outline">
                  へ
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  を
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  に
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  が
                </Button>
              </SimpleGrid>
            </Box>
            {/* Question */}
            <Box py={"10"}>
              <Text fontSize={"1.25vw"} pb={"5"}>
                2. 田中さんは　_______ 来ていませんよ。
              </Text>
              {/* Choices */}
              <SimpleGrid columns={2} spacing={10}>
                <Button borderColor={border} variant="outline">
                  もう
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  だけ
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  まだ
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  まで
                </Button>
              </SimpleGrid>
            </Box>
            {/* Question */}
            <Box pb={"10"}>
              <Text fontSize={"1.25vw"} pb={"5"}>
                3. ナイフ　_______ パンをきりました。
              </Text>
              <SimpleGrid columns={2} spacing={10}>
                <Button borderColor={border} variant="outline">
                  で
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  を
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  に
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  が
                </Button>
              </SimpleGrid>
            </Box>
          </Container>
        </GridItem>
        <GridItem colSpan={"1"}>
          {/* Question List */}
          <Card boxShadow="lg" bgColor={bg}>
            <CardHeader>
              <Text fontSize={"1.5vw"}>Questions</Text>
            </CardHeader>
            <CardBody>
              <Flex>
                <Tag size="lg" variant="outline" mr="5">
                  <TagLabel>Q1</TagLabel>
                </Tag>
                <Tag size="lg" variant="outline" mr="5">
                  <TagLabel>Q1</TagLabel>
                </Tag>
                <Tag size="lg" variant="outline" mr="5">
                  <TagLabel>Q1</TagLabel>
                </Tag>
              </Flex>
            </CardBody>
            <CardFooter justify={"end"}>
              <Button borderColor={border} variant="outline">
                Submit
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
}

export default GrammarQuestionSample;
