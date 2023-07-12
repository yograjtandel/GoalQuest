import { Box, Button, Checkbox, Input } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import CustomAccordinaItem from '../ui/AccordianItem';

const Role = (props) => {
  const { rights } = props;

  const rights_list = rights.map((right) => (
    <Checkbox
      w={'fit-content'}
      fontWeight={'normal'}
      id={right.name}
      key={right.id}
    >
      {right.display_name}
    </Checkbox>
  ));
  return (
    <CustomAccordinaItem title="Role">
      <InputWrapper title="Name">
        <Input type="text" />
      </InputWrapper>
      <InputWrapper title="Permission">
        <Box display={'flex'} flexDirection={'column'} w={'50%'}>
          {rights_list}
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
    </CustomAccordinaItem>
  );
};

export default Role;
