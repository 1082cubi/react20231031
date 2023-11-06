import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["라떼", "에스프레소", "카푸치노"];

  const listItem = arr.map((item) => <ListItem>{item}</ListItem>);
  return (
    <div>
      <Box mb={3}>
        <List>{listItems}</List>
      </Box>
      <Box mb={3}>
        <List>
          {arr2.map((e) => (
            <ListItem>{e}</ListItem>
          ))}
        </List>
      </Box>
      <Box mp={3}>
        <List>
          {arre.map((e) => (
            <ListItem>{e}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;
