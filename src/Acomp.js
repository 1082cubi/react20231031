import React, {useContext} from "react";
import {Button} from "@chakra-ui/react";
import {MContext} from "./App";

export function Acomp() {
  const {setMessage} = useContext(MContext);
  return;
  <Button onclick={() => setMessage("가즈아")}>버튼</Button>;
}