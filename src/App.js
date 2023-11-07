import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function MyComp1() {
  return (
    <Box>
      <Button setMessage={onclick}>버튼</Button>
    </Box>
  );
}

function MyComp2({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function App(props) {
  const [message, setMessage] = useState("헬로");
  function handleButtonClick() {
    setMessage("하이");
  }
  return (
    <div>
      <MyComp1 setMeessage={handleButtonClick}></MyComp1>
      {/*MyComp1 에 있는 버튼이 클릭되면*/}
      <MyComp2 message={message}></MyComp2>
      {/*MyComp2 에 있는 text가 바뀌게 되는*/}
    </div>
  );
}

export default App;
