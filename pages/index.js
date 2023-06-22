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

const setting = () => {
  const [Todo, setTodo] = useState('');
  const [data, setState] = useState([]);

  const clickHandler = () => {
    setState((prev) => [...prev, Todo]);
    setTodo('');
  };

  return (
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
  );
};

export default setting;
