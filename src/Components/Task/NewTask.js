import {
  Button,
  Input,
  Select,
  Textarea,
  Text,
  useDisclosure,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Drawer from "../drawer/Drawer";
import { useRef, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import InputWrapper from "../form/InputWrapper";
import Logtime from "./LogTime";
import ParentChildTask from "./ParentChildTask";

const NewTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogtime, setIsLogtime] = useState(false);
  const btnRef = useRef();

  const parentChildTaskHandler = () => {
    setIsLogtime(false);
    onOpen();
  };
  const logtimeHandler = () => {
    setIsLogtime(true);
    onOpen();
  };
  return (
    <>
      <InputWrapper title="Title">
        <Input type="text" />
      </InputWrapper>
      <InputWrapper title="Project">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <InputWrapper title="Deadline">
        <Input type="Date" />
      </InputWrapper>
      <InputWrapper title="Assignee">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <InputWrapper title="Tag">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <InputWrapper title="Description">
        <Textarea placeholder="Here is a sample placeholder" />
      </InputWrapper>
      <InputWrapper title="Priority">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <Box>
        <Accordion shadow={"xl"} allowToggle={'true'} mt={2}>
          <AccordionItem>
            <h2>
              <AccordionButton
                px={"4"}
                ref={btnRef}
                bg={"none"}
                onClick={parentChildTaskHandler}
                _hover={{ bg: "none" }}
                _active={{bg:'red'}}
                _focus={{bg:'red'}}
              >
                <Box as="span" flex="1" textAlign="left">
                  Parent Task
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            {/* <AccordionPanel pb={4}></AccordionPanel> */}
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                px={"4"}
                ref={btnRef}
                bg={"none"}
                onClick={parentChildTaskHandler}
                _hover={{ bg: "none" }}
              >
                <Box as="span" flex="1" textAlign="left">
                  Child Task
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            {/* <AccordionPanel pb={4}></AccordionPanel> */}
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Time Logs
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text mb={2} mt={2} fontWeight={"bold"}>
                Total Time Tracked
              </Text>
              <Text mb={4}>02 hours 2 mins 5 sec</Text>
              <Button onClick={logtimeHandler} size={"sm"} mb={4}>
                Logtime
              </Button>
              <TableContainer border={"1px solid"} borderColor={"gray.200"}>
                <Table variant="simple" size={"sm"}>
                  <Thead>
                    <Tr>
                      <Th>Emp</Th>
                      <Th>Time</Th>
                      <Th>Billable</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>inches</Td>
                      <Td>millimetres (mm)</Td>
                      <Td>25.4</Td>
                    </Tr>
                    <Tr>
                      <Td>feet</Td>
                      <Td>centimetres (cm)</Td>
                      <Td>30.48</Td>
                    </Tr>
                    <Tr>
                      <Td>yards</Td>
                      <Td>metres (m)</Td>
                      <Td>0.91444</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box>
        <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} size={"md"}>
          {!isLogtime && <ParentChildTask />}
          {isLogtime && <Logtime />}
        </Drawer>
      </Box>
    </>
  );
};

export default NewTask;
