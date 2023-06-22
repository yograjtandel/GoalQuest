import {
  Flex,
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
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import CustomDrawer from '../drawer';
import { useRef, useState } from 'react';
import { InputWrapper } from '../form';
import { LogTime, ParentChildTask } from './index';
import CustomCard from '../card';
import { AddIcon } from '@chakra-ui/icons';
const NewTask = () => {
  const [maintitle, setTitle] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogtime, setIsLogtime] = useState(false);

  const parentTaskHandler = () => {
    setIsLogtime(false);
    setTitle('Parent');
    onOpen();
  };

  const childTaskHandler = () => {
    setIsLogtime(false);
    setTitle('Child');
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
        <Accordion shadow={'xl'} allowToggle={'true'} mt={2}>
          <AccordionItem>
            <h2>
              <AccordionButton
                px={'4'}
                bg={'none'}
                borderBottom={'1px solid'}
                borderColor={'gray.300'}
              >
                <Box as="span" flex="1" textAlign="left">
                  Parent Task
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box w={'100%'} display={'flex'} justifyContent={'end'} mb={2}>
                <Button
                  size={'sm'}
                  onClick={parentTaskHandler}
                  bg={'secondary.400'}
                  color={'white'}
                  _hover={{ bg: 'primary.400' }}
                >
                  <AddIcon />
                </Button>
              </Box>
              <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
                <CustomCard />
                <CustomCard />
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                px={'4'}
                bg={'none'}
                onClick={childTaskHandler}
                borderBottom={'1px solid'}
                borderColor={'gray.300'}
              >
                <Box as="span" flex="1" textAlign="left">
                  Child Task
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton borderBottom={'1px solid'} borderColor={'gray.300'}>
                <Box as="span" flex="1" textAlign="left">
                  Time Logs
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text mb={2} mt={2} fontWeight={'bold'}>
                Total Time Tracked
              </Text>
              <Text mb={4}>02 hours 2 mins 5 sec</Text>
              <Button onClick={logtimeHandler} size={'sm'} mb={4}>
                Logtime
              </Button>
              <TableContainer border={'1px solid'} borderColor={'gray.200'}>
                <Table variant="simple" size={'sm'}>
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
        <CustomDrawer
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          size={'md'}
          maintitle={`${maintitle} Title`}
        >
          {!isLogtime && <ParentChildTask />}
          {isLogtime && <LogTime />}
        </CustomDrawer>
      </Box>
    </>
  );
};

export default NewTask;
