import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Box, Flex, Text } from "@chakra-ui/react";
function DoughnutChart() {
  ChartJS.register(ArcElement, Legend);
  const data = {
    labels: ["N1", "N2", "N3", "N4", "N5"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Flex flexDir={"column"}>
      <Box h="50px" p="15px" bg="blue.800">
        <Text fontSize="lg" fontWeight="extrabold" color="whiteAlpha.900">
          Learners per Level
        </Text>
      </Box>
      <Flex justifyContent={"center"}>
        <Doughnut data={data}></Doughnut>
      </Flex>
    </Flex>
  );
}

export default DoughnutChart;
