import React, {useContext} from "react";
import {Text} from "@chakra-ui/react";
import {MContext} from "./App";

export function Bcomp() {
  const { message } = useContext(MContext);
  return <Text>message</Text>;
}