import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Button,
  phoneIcon,
  Emaillcon,
  Table,
  Th,
  Td,
  Center,
  Circle,
  Square,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import React from "react";

function App() {
  return (
    <>
      <Center bg={"red"} h={"200px"}>
        <Square bg={"blue"} w={"100px"} h={"100px"}>
          Leoem
        </Square>
      </Center>

      <Center bg={"red.200"} h={"200px"}>
        <Circle bg={"blue.200"} w={"100px"} h={"100px"}>
          <PhoneIcon />
        </Circle>
      </Center>
    </>
  );
}
export default App;
