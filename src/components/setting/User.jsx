import { Button, Checkbox, Input, Select } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import { useDispatch } from 'react-redux';

const User = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(
//       SetFormMode({
//         ...otherTaskFormData.form_mode,
//         stage: mode,
//       })
//     );
//   }, []);
  return (
    <>
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
    </>
  );
};

export default User;
