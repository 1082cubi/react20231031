import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function Acomp() {
  const { setMessage } = useContext(MContext);
  return;
  <Button onclick={() => setMessage("가즈아")}>버튼</Button>;
}

function Bcomp() {
  const { message } = useContext(MContext);
  return <Text>message</Text>;
}

function App(props) {
  const [message, setMessage] = useState("처음");
  return (
    <div>
      <MContext.prvider
        value={{
          message,
          setMessage,
        }}
      >
        <Acomp></Acomp>
        <Bcomp></Bcomp>
      </MContext.prvider>
    </div>
  );
}
const MContext = createContext(null);

export default App;
