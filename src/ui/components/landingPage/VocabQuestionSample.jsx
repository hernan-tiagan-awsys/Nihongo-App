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

function VocabQuestionSample() {
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
              {" "}
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
                1. _______ 、えいがをみにいきませんか？
              </Text>
              <SimpleGrid columns={2} spacing={10}>
                <Button borderColor={border} variant="outline">
                  ゆうべ
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  きのう
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  あした
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  おととい
                </Button>
              </SimpleGrid>
            </Box>
            {/* Question */}
            <Box py={"10"}>
              <Text fontSize={"1.25vw"} pb={"5"}>
                2.わたしはいつも　_______ をききながらべんきょうします。
              </Text>
              {/* Choices */}
              <SimpleGrid columns={2} spacing={10}>
                <Button borderColor={border} variant="outline">
                  ぺん
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  ラジオ
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  テーブル
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  ストーブ
                </Button>
              </SimpleGrid>
            </Box>
            {/* Question */}
            <Box pb={"10"}>
              <Text fontSize={"1.25vw"} pb={"5"}>
                3. わたしのすきなのみものは　_______ です。
              </Text>
              <SimpleGrid columns={2} spacing={10}>
                <Button borderColor={border} variant="outline">
                  おかし
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  こうちゃ
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  みかん
                </Button>
                <Button borderColor={border} variant={"outline"}>
                  ねこ
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

export default VocabQuestionSample;
