import { Button, Input } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import { useState } from 'react';
import useAction from '@/src/hooks/use-Action';
import { useSession } from 'next-auth/react';
import CustomAccordinaItem from '../ui/AccordianItem';

const Stage = () => {
  const session = useSession();
  const [Title, setTitle] = useState('');
  const { Action, Response, Error } = useAction();

  const CreateStag = async () => {
    const TagRes = await Action({
      method: 'post',
      url: '/v1/stage',
      data: {
        title: Title,
        createdBy: session.data.id,
      },
    });
  };
  return (
    <CustomAccordinaItem title="Stage">
      <InputWrapper title="Name">
        <Input
          type="text"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </InputWrapper>
      <Button
        color={'white'}
        bg={'secondary.400'}
        size={'sm'}
        _hover={{
          bg: 'primary.400',
        }}
        onClick={CreateStag}
      >
        Save
      </Button>
    </CustomAccordinaItem>
  );
};

export default Stage;
