import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import * as PropTypes from "prop-types";

function ModalBdy(props) {
  return null;
}

ModalBdy.propTypes = { children: PropTypes.node };

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick>모달 열기</Button>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      ></Modal>
      <Modal isOpen={onOpen}>onClose</Modal>
      <ModalContent>
        <ModalHeader>모달의 제목</ModalHeader>
        <ModalBody>dlsfkldkflsdfjdklsjfljdslkfjdlsfjldsjflkjls</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}></Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
}
export default App;
