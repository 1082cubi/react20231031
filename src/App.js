import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Button,
  phoneIcon,
  Emaillcon,
  Table, Th, Td,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <SimpleGrid columns={1} gap={5}>
        <Box>
          <Table>
            <Thead>
              <Tr>
                <Th>Lorem.</Th>
                <Th>Vero.</Th>
                <Th>Tenetur?</Th>
                <Th>Fugit.</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Assumenda?</Td>
                <Td>Amet.</Td>
                <Td>Omnis?</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Eos!</Td>
                <Td>Tempora.</Td>
                <Td>Cum.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Voluptates!</Td>
                <Td>Reiciendis.</Td>
                <Td>Aliquid!</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Explicabo.</Td>
                <Td>Est.</Td>
                <Td>Sapiente.</Td>
              </Tr>
              <Tr>
                <Td>Lorem.</Td>
                <Td>Quam!</Td><Td>Beatae!</Td><Td>Ipsam!</Td></Tr></Tbody><Tbody><Tr><Td>Lorem.</Td><Td>Provident!</Td><Td>Voluptas.</Td><Td>Eum!</Td></Tr><Tr><Td>Lorem.</Td><Td>Quam.</Td><Td>Ipsum.</Td><Td>Recusandae!</Td></Tr><Tr><Td>Lorem.</Td><Td>Ipsam.</Td><Td>Vel!</Td><Td>Tempore!</Td></Tr><Tr><Td>Lorem.</Td><Td>Aspernatur.</Td><Td>Repellat!</Td><Td>Quaerat?</Td></Tr><Tr><Td>Lorem.</Td><Td>Quidem.</Td><Td>Voluptatem?</Td><Td>Quisquam.</Td></Tr></Tbody><Tbody><Tr><Td>Lorem.</Td><Td>Itaque.</Td><Td>Maiores!</Td><Td>Magni?</Td></Tr><Tr><Td>Lorem.</Td><Td>Iste.</Td><Td>Sunt.</Td><Td>Provident.</Td></Tr><Tr><Td>Lorem.</Td><Td>Voluptatum?</Td><Td>Eligendi.</Td><Td>Dolores?</Td></Tr><Tr><Td>Lorem.</Td><Td>Ducimus?</Td><Td>Quisquam?</Td><Td>Repellendus.</Td></Tr><Tr><Td>Lorem.</Td><Td>Laboriosam!</Td><Td>Quibusdam!</Td><Td>Enim.</Td></Tr></Tbody><Tbody><Tr><Td>Lorem.</Td><Td>Est!</Td><Td>Sed.</Td><Td>Quia.</Td></Tr><Tr><Td>Lorem.</Td><Td>Obcaecati?</Td><Td>Ex.</Td><Td>Molestias.</Td></Tr><Tr><Td>Lorem.</Td><Td>Ut.</Td><Td>Doloribus.</Td><Td>Magnam.</Td></Tr><Tr><Td>Lorem.</Td><Td>Amet.</Td><Td>Unde.</Td><Td>Earum!</Td></Tr><Tr><Td>Lorem.</Td><Td>Omnis.</Td><Td>Cum?</Td><Td>Illum.</Td></Tr></Tbody></Table></Box>
        <Box>
       <Table variant="striped" colorScheme="red"></Table>
          <Thead>
          <Tr>
            <Th></Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
          </Tr>
          </Thead>
          
        </Box>
    </>
  )
}

export default App;
