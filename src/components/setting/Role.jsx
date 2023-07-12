import { Box, Button, Checkbox, Input } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import CustomAccordinaItem from '../ui/AccordianItem';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import useAction from '@/src/hooks/use-Action';

const Role = (props) => {
  const { rights } = props;
  const session = useSession();
  const [Title, setTitle] = useState('');
  const [Rights, setRights] = useState([]);
  const { Action, Response, Error } = useAction();

  const checkbocChangeHandler = (value) => {
    let rights = [...Rights];
    const index = rights.findIndex((val) => val === value);

    if (index !== -1) {
      rights.splice(index, 1);
      setRights(rights);
    } else {
      setRights((prev) => [...prev, value]);
    }
  };

  const rights_list = rights.map((right) => (
    <Checkbox
      w={'fit-content'}
      fontWeight={'normal'}
      key={right.id}
      onChange={() => {
        checkbocChangeHandler(right.name);
      }}
    >
      {right.display_name}
    </Checkbox>
  ));

  const CreateRole = async () => {
    debugger
    await Action({
      method: 'post',
      url: '/v1/roles',
      data: {
        name: Title,
        rights: Rights,
        createdBy: session.data.id,
      },
    });
  };
  return (
    <CustomAccordinaItem title="Role">
      <InputWrapper title="Name">
        <Input
          type="text"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
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
        onClick={CreateRole}
      >
        Save
      </Button>
    </CustomAccordinaItem>
  );
};

export default Role;
