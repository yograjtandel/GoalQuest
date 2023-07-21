import useAction from '@/src/hooks/use-Action';
import Multiselect from '@/src/components/multiselect/index';
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
  Grid,
  GridItem,
  Box,
  Input,
  Checkbox,
  Flex,
  Card,
  CardBody,
  CardHeader,
  Heading,
  IconButton,
  List,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Home() {
  const { Action, Response, Error } = useAction();
  const [Todo, setTodo] = useState('');
  const [data, setState] = useState([]);
  const clickHandler = () => {
    setState((prev) => [...prev, Todo]);
    setTodo('');
  };

  async function signup() {
    const auth0Response = await fetch(
      `https://dev-c0a3javl4d5ua32y.us.auth0.com/dbconnections/signup`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          client_id: '4z8QNi1ATEjLsRiK5XJORcO2xif7ffmn',
          connection: 'Username-Password-Authentication',
          email: 'new@new.com',
          password: 'New@1234',
        }),
      }
    );
    const body = await auth0Response.json();

    await Action({
      method: 'post',
      url: '/v1/user/',
      data: {
        email: 'new@new.com',
        role: '6497ca904ff8285535f7711c',
        name: 'new',
      },
    });
  }
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
      <Button
        onClick={() =>
          signIn(
            'auth0',
            { callbackUrl: 'http://localhost:3000' },
            { screen_hint: 'signup' }
          )
        }
      >
        Sign up
      </Button>
      <Box p={4} w={'100%'} display={'flex'} justifyContent={'start'}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} w="100%">
          <GridItem>
            <Card>
              <CardHeader display={'flex'} flexDirection={'column'}>
                <Flex justifyContent={'space-between'}>
                  <Box>
                    <Heading as="h5" size="md" mb={1}>
                      Pending Task
                    </Heading>
                    <Text fontSize={'14px'} fontWeight={'light'} p={0}>
                      accross helpdesk
                    </Text>
                  </Box>
                  <Box>
                    <Button
                      fontSize={'sm'}
                      size={'sm'}
                      colorScheme="teal"
                      variant="link">
                      View Details
                    </Button>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody
                py={0}
                overflow={'hidden'}
                h={'100%'}
                minH={'200px'}
                maxH={'200px'}
                p={2}>
                <>
                  <TableContainer
                    overflowY={'auto'}
                    h={'100%'}
                    maxH={'200px'}
                    minH={'200px'}
                    py={'2'}>
                    <Table>
                      <Thead>
                        <Tr>
                          <Th>Group</Th>
                          <Th isNumeric>Open</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr p={2}>
                          <Td fontWeight={'normal'} p={2} fontSize={'sm'}>
                            Escalations
                          </Td>
                          <Td
                            isNumeric
                            fontWeight={'normal'}
                            p={2}
                            fontSize={'sm'}>
                            25.4
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              <CardHeader display={'flex'} flexDirection={'column'}>
                <Flex justifyContent={'space-between'}>
                  <Box>
                    <Heading as="h5" size="md" mb={1}>
                      Project Task
                    </Heading>
                    <Text fontSize={'14px'} fontWeight={'light'} p={0}>
                      accross helpdesk
                    </Text>
                  </Box>
                  <Box>
                    <Button
                      fontSize={'sm'}
                      size={'sm'}
                      colorScheme="teal"
                      variant="link"
                    >
                      View Details
                    </Button>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody
                py={0}
                overflow={'hidden'}
                h={'100%'}
                minH={'200px'}
                maxH={'200px'}
                p={2}
              >
                <>
                  <TableContainer
                    overflowY={'auto'}
                    h={'100%'}
                    maxH={'200px'}
                    minH={'200px'}
                    py={'2'}
                  >
                    <Table>
                      <Thead>
                        <Tr>
                          <Th>Group</Th>
                          <Th isNumeric>Open</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr p={2}>
                          <Td fontWeight={'normal'} p={2} fontSize={'sm'}>
                            Escalations
                          </Td>
                          <Td
                            isNumeric
                            fontWeight={'normal'}
                            p={2}
                            fontSize={'sm'}
                          >
                            25.4
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </>
              </CardBody>
            </Card>
          </GridItem>
          {/* <GridItem>
            <Card>
              <CardHeader display={'flex'} flexDirection={'column'}>
                <Flex justifyContent={'space-between'}>
                  <Box>
                    <Heading as="h5" size="md" mb={1}>
                      Customer satisfaction
                    </Heading>
                    <Text fontSize={'14px'} fontWeight={'light'} p={0}>
                      accross helpdesk this month
                    </Text>
                  </Box>
                  <Box>
                    <Button
                      fontSize={'sm'}
                      size={'sm'}
                      colorScheme="teal"
                      variant="link"
                    >
                      View Details
                    </Button>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody
                py={0}
                overflow={'hidden'}
                h={'100%'}
                minH={'200px'}
                maxH={'200px'}
                p={2}
              >
                <>
                  <Flex flexWrap={'wrap'} p={4}>
                    <Box w={'50%'} p={'2'}>
                      {' '}
                      <Text fontSize={'14px'} fontWeight={'normal'}>
                        Reponses Received
                      </Text>{' '}
                      <Text fontSize={'30px'} fontWeight={'normal'}>
                        0
                      </Text>{' '}
                    </Box>
                    <Box w={'50%'} p={'2'}>
                      {' '}
                      <Text fontSize={'14px'} fontWeight={'normal'}>
                        Postive
                      </Text>
                      <Text fontSize={'30px'} fontWeight={'normal'}>
                        0
                      </Text>
                    </Box>
                    <Box w={'50%'} p={'2'}>
                      {' '}
                      <Text fontSize={'14px'} fontWeight={'normal'}>
                        Neutral
                      </Text>{' '}
                      <Text fontSize={'30px'} fontWeight={'normal'}>
                        0
                      </Text>
                    </Box>
                    <Box w={'50%'} p={'2'}>
                      {' '}
                      <Text fontSize={'14px'} fontWeight={'normal'}>
                        Negative
                      </Text>{' '}
                      <Text fontSize={'30px'} fontWeight={'normal'}>
                        0
                      </Text>
                    </Box>
                  </Flex>
                </>
              </CardBody>
            </Card>
          </GridItem> */}
            <GridItem>
            <Card    maxH={'200px'}
                    minH={'200px'} overflow={'hidden'}>
              <CardHeader display={'flex'} flexDirection={'column'}>
                <Heading as="h4" size="md" mb={4}>
                  To Do
                </Heading>
                <Flex >
                  <Input
                    m={0}
                    value={Todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Add a To-DO"
                    border={'1px solid transparent'}
                    borderBottom={'1px solid '}
                    borderRadius={'none'}
                    outline={'none'}
                    _focus={{
                      border: '1px solid transparent',
                      borderBottom: '1px solid grey',
                    }}
                    _hover={{
                      border: '1px solid transparent',
                      borderBottom: '1px solid',
                    }}
                    _focusVisible={{
                      border: '1px solid transparent',
                      borderBottom: '1px solid',
                    }}
                  />
                  <Box>
                    <IconButton
                      colorScheme="blue"
                      aria-label="Search database"
                      icon={<AddIcon />}
                      onClick={clickHandler}
                    />
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody py={0}>
                <>
                  {data.map((item, index) => (
                    <List>
                      <Checkbox py={2} key={index}>
                        {item}
                      </Checkbox>
                    </List>
                  ))}
                </>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem><Multiselect/> </GridItem>
          <GridItem />
        </Grid>
      </Box>
    </>
  );
}
