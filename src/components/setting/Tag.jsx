import { Button, Input } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import { useState } from 'react';
import useAction from '@/src/hooks/use-Action';
import { useSession } from 'next-auth/react';
import CustomAccordinaItem from '../ui/AccordianItem';

const Tag = () => {
  const session = useSession();
  const [Title, setTitle] = useState('');
  const { Action, Response, Error } = useAction();

  const CreateTag = async () => {
    const TagRes = await Action({
      method: 'post',
      url: '/v1/tag',
      data: {
        title: Title,
        createdBy: session.data.id,
      },
    });
  };
  return (
    <CustomAccordinaItem title="Tag">
      <InputWrapper title="Title">
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
        onClick={CreateTag}
      >
        Save
      </Button>
    </CustomAccordinaItem>
  );
};

export default Tag;
