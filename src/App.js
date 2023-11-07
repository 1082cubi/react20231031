import React, { createContext, useState } from "react";
import { Acomp } from "./Acomp";
import { Bcomp } from "./Bcomp";

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
export const MContext = createContext(null);

export default App;
