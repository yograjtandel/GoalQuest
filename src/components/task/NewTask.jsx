import {
  Flex,
  Button,
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
import { v4 as uuidv4 } from 'uuid';
import CustomDrawer from '../drawer';
import { useState } from 'react';
import { LogTime, TaskBasicDetailForm } from './index';
import CustomCard from '../card';
import { AddIcon } from '@chakra-ui/icons';
import {
  ChildTaskFormData,
  ParentTaskFormData,
  SetFormMode,
  SetIntialParentTaskData,
  SetIntialChildTaskData,
  TaskFormData,
  UpdateTaskForm,
  childTasks,
  parentTasks,
  TaskOtherData,
} from '@/src/store/task/task.slice';
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from '@/src/utility/helper';
import { globalData } from '@/src/store/global/global.slice';

const NewTask = () => {
  const [maintitle, setTitle] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogtime, setIsLogtime] = useState(false);
  const dispatch = useDispatch();
  const taskFormData = useSelector(TaskFormData);
  const parentTaskFormData = useSelector(ParentTaskFormData);
  const childTaskFormData = useSelector(ChildTaskFormData);
  const otherTaskFormData = useSelector(TaskOtherData);
  const ParentTasks = useSelector(parentTasks);
  const ChildTasks = useSelector(childTasks);
  const globalFormData = useSelector(globalData);
  const { projects } = globalFormData;

  const parentTaskHandler = (e) => {
    setIsLogtime(false);
    setTitle('parent');
    dispatch(
      UpdateTaskForm({
        value: {
          isParentTask: true,
          isChildTask: false,
        },
        key: 'other',
      })
    );
    dispatch(
      SetFormMode({
        ...otherTaskFormData.form_mode,
        parent: 'create',
      })
    );
    onOpen();
  };

  const childTaskHandler = (e) => {
    setIsLogtime(false);
    setTitle('child');
    dispatch(
      UpdateTaskForm({
        value: {
          isParentTask: false,
          isChildTask: true,
        },
        key: 'other',
      })
    );
    dispatch(
      SetFormMode({
        ...otherTaskFormData.form_mode,
        child: 'create',
      })
    );
    onOpen();
  };

  const parentCardClickHandler = (task) => {
    dispatch(
      SetIntialParentTaskData({
        data: task,
      })
    );
    dispatch(
      SetFormMode({
        parent: 'edit',
      })
    );
  };

  const childCardClickHandler = (task) => {
    dispatch(
      SetIntialChildTaskData({
        data: task,
      })
    );
    dispatch(
      SetFormMode({
        child: 'edit',
      })
    );
  };

  const parentTaskList = ParentTasks.map((task) => {
    const project = getProject(projects, task.project_id);
    return (
      <CustomCard
        onClick={() => parentCardClickHandler(task)}
        drawer_size="md"
        onClickDispaly={
          <TaskBasicDetailForm
            parent_key={'parent_task'}
            data={parentTaskFormData}
          />
        }
        key={uuidv4()}
      >
        <Text fontWeight={'400'}> {task.title}</Text>
        <Text fontWeight={'400'} fontSize={'14px'} color={'gray.500'}>
          {project.name}
        </Text>
      </CustomCard>
    );
  });

  const ChildTaskList = ChildTasks.map((task) => {
    const project = getProject(projects, task.project_id);
    return (
      <CustomCard
        onClick={() => childCardClickHandler(task)}
        drawer_size="md"
        onClickDispaly={
          <TaskBasicDetailForm
            parent_key={'child_task'}
            data={parentTaskFormData}
            size={'md'}
          />
        }
        key={uuidv4()}
      >
        <Text fontWeight={'400'}> {task.title}</Text>
        <Text fontWeight={'400'} fontSize={'14px'} color={'gray.500'}>
          {project.name}
        </Text>
      </CustomCard>
    );
  });

  const logtimeHandler = () => {
    setIsLogtime(true);
    onOpen();
  };

  return (
    <>
      <TaskBasicDetailForm parent_key="task" data={taskFormData} />
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
                  id="isParentTask"
                  onClick={(e) => parentTaskHandler(e)}
                  bg={'secondary.400'}
                  color={'white'}
                  _hover={{ bg: 'primary.400' }}
                >
                  <AddIcon />
                </Button>
              </Box>
              <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
                {parentTaskList}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                px={'4'}
                bg={'none'}
                borderBottom={'1px solid'}
                borderColor={'gray.300'}
              >
                <Box as="span" flex="1" textAlign="left">
                  Child Task
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box w={'100%'} display={'flex'} justifyContent={'end'} mb={2}>
                <Button
                  size={'sm'}
                  id="isChildTask"
                  onClick={(e) => childTaskHandler(e)}
                  bg={'secondary.400'}
                  color={'white'}
                  _hover={{ bg: 'primary.400' }}
                >
                  <AddIcon />
                </Button>
              </Box>
              <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
                {ChildTaskList}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                borderBottom={'1px solid'}
                borderColor={'gray.300'}
              >
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
          maintitle={`${maintitle}`}
        >
          {!isLogtime && (
            <TaskBasicDetailForm
              parent_key={maintitle === 'parent' ? 'parent_task' : 'child_task'}
              data={
                otherTaskFormData.isParentTask
                  ? parentTaskFormData
                  : childTaskFormData
              }
            />
          )}
          {isLogtime && <LogTime />}
        </CustomDrawer>
      </Box>
    </>
  );
};

export default NewTask;
