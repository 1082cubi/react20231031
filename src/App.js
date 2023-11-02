import { EmailIcon } from "@chakra-ui/icons";
import * as PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

function Botton(props) {
  return null;
}

Botton.propTypes = {
  colorScheme: PropTypes.string,
  children: PropTypes.node,
};

function App() {
  return (
    <>
      <Botton colorScheme="blue">lonrem</Botton>
      <Botton colorScheme="red">lonrem</Botton>
      <Botton colorScheme="yellow">lonrem</Botton>
      <Botton colorScheme={"orange"}>lonrem</Botton>
      <Botton oclorScheme>lonrem</Botton>
      <Botton colorScheme="teal" size={"sm"}>
        lonrem
      </Botton>
      <Botton variant={"link"}> colorSchlonrem</Botton>
      <Botton leftIcon={<EmailIcon />}>lonrem</Botton>
      <Botton isLoading>Temporibus!</Botton>
      <Botton>lonrem</Botton>
      <Botton>lonrem</Botton>
    </>
  );
}
export default App;
