import { useKanaContext } from "../../../logic/hooks/kana/useKanaContext";
import { useEffect } from "react";
import { useState } from "react";
import { Box, Flex, SimpleGrid, Skeleton, Spacer } from "@chakra-ui/react";
import KanaCards from "./KanaCards";
import KanaSelectorTabSide from "./KanaSelectorTabSide";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import {
  fetchAllKana,
  fetchSpecificMode,
  fetchSpecificKana,
} from "../../../logic/services/apiKana";

function KanaLayout() {
  const navigate = useNavigate();
  const {
    kanaData,
    kanaMode,
    kanaType,
    kanaGroup,
    dispatch: kanaDispatch,
  } = useKanaContext();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const res = await fetchFunc();

      async function fetchFunc() {
        if (kanaType && kanaMode.length && kanaGroup.length) {
          // Checks if user is fetching a specific kana with type mode and group arguments
          return await fetchSpecificKana(kanaMode, kanaGroup, kanaType);
        } else if (kanaType && kanaMode.length && !kanaGroup.length) {
          // Checks if user is fetching all kana from a specific type and from specific mode with type and mode arguments
          return await fetchSpecificMode(kanaMode, kanaType);
        } else if (kanaType && !kanaMode.length && !kanaGroup.length) {
          // Checks if user is fetching all kana from a scpecific type with only the type argument
          return await fetchAllKana(kanaType);
        } else {
          // Sesssion storage must have atleast a kanatype to work, if session storage is tampered and kanatype is removed throw error
          navigate("/");
          throw new Error(
            "Problem with session storage have atleast kanaType present"
          );
        }
      }

      // Error handilng for reponse handling
      try {
        const json = await res.json();
        //throws error if API returns an error
        if (!res.ok) throw new Error(json.error);

        //saves fetched data
        if (res.ok) kanaDispatch({ type: "dataReceived", payload: json });
      } catch (error) {
        console.warn(error);
      }

      setIsLoading(false);
    }
    fetchData();
  }, [kanaMode, kanaType, kanaGroup, kanaDispatch]);

  return (
    <Box pt="10vh">
      {/* ================================================================================ */}
      <Loader isLoading={isLoading} />
      {/* ================================================================================ */}
      <Flex
        position="relative"
        id="kanaPageScroll"
        h="90vh"
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
        <Box
          position="fixed"
          minW="25vw"
          ml={{ base: "0", xl: "1.5vw" }}
          display={{ base: "none", lg: "block" }}
        >
          {/* ================================================================================ */}
          <KanaSelectorTabSide key="Tabside" isLoading={isLoading} />
          {/* ================================================================================ */}
        </Box>
        <Box
          minW={{ base: "25vw", lg: "50vw", xl: "62.5vw" }}
          ml={{ base: "2.5vw", lg: "28vw", xl: "30vw" }}
          mr={{ base: "2.5vw", lg: "0", xl: "0" }}
        >
          <SimpleGrid
            id="kanaBody"
            columns={{ base: 2, lg: 3 }}
            gap={{ base: "2.5vw", lg: "1.5vw", xl: "5vh" }}
            py="2.5vh"
          >
            {/* ================================================================================ */}
            {kanaData.map((kana, index) => {
              return (
                <Skeleton
                  key={`${kana}${index}Selector`}
                  isLoaded={!isLoading}
                  fadeDuration={3}
                >
                  {/* ================================================================================ */}
                  <KanaCards
                    totalItems={kanaData.length}
                    kana={kana}
                    index={index}
                  />
                  {/* ================================================================================ */}
                </Skeleton>
              );
            })}
            {/* ================================================================================ */}
          </SimpleGrid>
          <Spacer minH={{ base: "10vh", lg: "0" }} />
        </Box>
      </Flex>
    </Box>
  );
}

export default KanaLayout;
