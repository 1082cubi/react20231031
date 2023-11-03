import React, { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);

  function handlePlusButtonClick() {
    setNumber(number + 1);
  }
  function handleMinusButtonClick() {
    setNumber(number - 1);
  }
  return (
    <div>
      <Input type="number" value={number}></Input>
      <Box>
        <Button onClick={handlePlusButtonClick}>+</Button>
        <Button onClick={handleMinusButtonClick}>-</Button>
      </Box>
      <Box>
        <Button onClick={() => setNumber(number + 1)}>+</Button>
        <Button onClick={() => setNumber(number - 1)}>-</Button>
      </Box>
    </div>
  );
}

export default App;
