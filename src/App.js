import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100px"}
        bg={"gray.300"}
        gap={1}
        align={"center"}
        justify={"space-around"}
      >
        <Box bg={"gord"}>Lorem.</Box>
        <Box bg={"red"}>Laudantium!</Box>
        <Box bg={"gray"}>Illo?</Box>
        <Box bg={"blue"}>Voluptatibus.</Box>
        <Box bg={"green"}>Illo?</Box>
      </Flex>
    </>
  );
}

export default App;
