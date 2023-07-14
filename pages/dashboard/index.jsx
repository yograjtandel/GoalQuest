import { v4 as uuidv4 } from 'uuid';
import { Box, Flex, CardBody, Text } from '@chakra-ui/react';
import Card from '@/src/components/card';
const dashboard = (props) => {
  const tasktitle = [
    { title: 'Unresolved', taskstatus: 3 },
    { title: 'Overdue', taskstatus: 3 },
    { title: 'Due Today', taskstatus: 3 },
    { title: 'Open', taskstatus: 3 },
    { title: 'OnHold', taskstatus: 3 },
    { title: 'Unassigned', taskstatus: 3 },
  ];
  const complitiontask = [
    { title: 'Resolved', taskstatus: 3 },
    { title: 'Recived', taskstatus: 3 },
    { title: 'Average First Response Time', taskstatus: 3 },
    { title: 'Average Response Time', taskstatus: 3 },
    { title: 'Resolution within SLA', taskstatus: 3 },
  ];
  return (
    <>
      <Box overflowY={'auto'} h={'90vh'} w={'100%'} p={4} bg={'gray.200'}>
        <Flex w={'100%'} overflowX={'hidden'} p={4}>
          <Box
            w={'100%'}
            display={'flex'}
            justifyContent={'start'}
            overflowX={'auto'}
          >
            {tasktitle.map((tasktitle) => (
              <Box w={'100%'} minWidth={'16%'} p={2} key={uuidv4()}>
                <Card p={0} footer={false} openDrawer={false}>
                  <CardBody p={0}>
                    <Text
                      fontSize={16}
                      fontWeight={'normal'}
                      color={'primary.400'}
                    >
                      {tasktitle.title}
                    </Text>
                    <Text fontWeight={'bold'}>{tasktitle.taskstatus}</Text>
                  </CardBody>
                </Card>
              </Box>
            ))}
          </Box>
        </Flex>
        <Flex p={4} w={'100%'}>
          <Box
            p="2"
            rounded="md"
            bg="light"
            display={'flex'}
            flexWrap={'wrap'}
            w={'100%'}
          >
            <Box w="65%" p={2}>
              <Box w={'100%'} h={'100%'} bg={'white'}>
                <Text> hello</Text>
              </Box>
            </Box>
            <Box w="35%" display={'flex'} flexWrap={'wrap'} overflow={'hidden'}>
              {complitiontask.map((complitiontask) => (
                <Box w={'50%'} p={2} key={uuidv4()}>
                  <Card p={0} footer={false} openDrawer={false}>
                    <CardBody p={3}>
                      <Text fontSize={16} fontWeight={'normal'}>
                        {complitiontask.title}
                      </Text>
                      <Text fontWeight={'bold'}>
                        {complitiontask.taskstatus}
                      </Text>
                    </CardBody>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default dashboard;
