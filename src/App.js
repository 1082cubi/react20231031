import React from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <Flex
      px={{ base: "0px", md: "100px", lg: "120px", xl: "180px" }}
      justify="space-between"
    >
      <Flex gap="7px" align="center>">
        <Text as="b" mt="8px">
          Navbar
        </Text>
        <Button variant={"ghost"}>Home</Button>
        <Button variant={"ghost"}>Link</Button>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                {isOpen ? "Close" : "Open"}
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem onClick={() => alert("Kagebunshin")}>
                  Create a Copy
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>

        <Button variant={"ghost"} isDisabled={true}>
          Disabled
        </Button>
      </Flex>
      <Flex gap="9px" align="center">
        <Input size="sm" bg="white" colorScheme="green" />
        <Button size="sm" variant="outline" colorScheme="green">
          Search
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
