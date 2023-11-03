import React from "react";
import { Button, Center } from "@chakra-ui/react";

function App(props) {
  function handleClick(e) {
    // event bubbling 막는 메소드
    e.stopPropagation();
    console.log(e.target.className);
  }
  return (
    <Center className="outerBox" w="200px" h="200px" bg="gold">
      <Center className="innerBox" w="100px" h="100px" bg="blue">
        <Button onClick={handleClick} colorScheme="yellow">
          button
        </Button>
      </Center>
    </Center>
  );
}

export default App;
