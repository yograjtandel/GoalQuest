import { Box, Accordion, Input, Button, Checkbox, Select } from '@chakra-ui/react';

import AccordionItem from '@/src/components/ui/AccordianItem';

import { InputWrapper } from '@/src/components/form';

const setting = () => {
  return (
    <Box p={4} w={'100%'} display={'flex'} justifyContent={'start'}>
      <Accordion w={'70%'} allowToggle={'true'}>
        {/* accordion 1 */}
        <AccordionItem title="Stage">
          <InputWrapper title="Name">
            <Input type="text" />
          </InputWrapper>
          <Button
            color={'white'}
            bg={'secondary.400'}
            size={'sm'}
            _hover={{
              bg: 'primary.400',
            }}
          >
            Save
          </Button>
        </AccordionItem>
        {/* accordion 2 */}
        <AccordionItem title="Tag">
          <InputWrapper title="Name">
            <Input type="text" />
          </InputWrapper>
          <Button
            color={'white'}
            bg={'secondary.400'}
            size={'sm'}
            _hover={{
              bg: 'primary.400',
            }}
          >
            Save
          </Button>
        </AccordionItem>
        {/* accordion 3 */}
        <AccordionItem title="Role">
          <InputWrapper title="Name">
            <Input type="text" />
          </InputWrapper>
          <InputWrapper title="Permission">
            <Box display={'flex'} flexDirection={'column'} w={'50%'}>
              <Checkbox w={'fit-content'} defaultChecked fontWeight={'normal'}>
                Create
              </Checkbox>
              <Checkbox w={'fit-content'} defaultChecked fontWeight={'normal'}>
                Update
              </Checkbox>
              <Checkbox w={'fit-content'} defaultChecked fontWeight={'normal'}>
                Delete
              </Checkbox>
            </Box>
          </InputWrapper>
          <Button
            color={'white'}
            bg={'secondary.400'}
            size={'sm'}
            _hover={{
              bg: 'primary.400',
            }}
          >
            Save
          </Button>
        </AccordionItem>
        {/* Accordion 4 */}
        <AccordionItem title="User">
          <InputWrapper title="Role">
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </InputWrapper>
          <InputWrapper title="Email">
            <Input placeholder="test@ncm.com" />
          </InputWrapper>
          <InputWrapper title="Name">
            <Input type="text" />
          </InputWrapper>
          <Button
            color={'white'}
            bg={'secondary.400'}
            size={'sm'}
            _hover={{
              bg: 'primary.400',
            }}
          >
            Save
          </Button>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default setting;
