import useAction from '@/src/hooks/use-Action';
import { Button } from '@chakra-ui/react';
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
        <Grid templateColumns="repeat(4, 1fr)" gap={6} w="100%">
          <GridItem>
            <Card>
              <CardHeader display={'flex'} flexDirection={'column'}>
                <Heading as="h4" size="md" mb={4}>
                  To Do
                </Heading>
                <Flex>
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
          <GridItem />
          <GridItem />
          <GridItem />
        </Grid>
      </Box>
    </>
  );
}
