import { Box, Checkbox, Input } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import { UpdateRoleForm } from '@/src/store/role/role.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RoleFormData } from '@/src/store/role/role.slice';

const Role = (props) => {
  const { rights } = props;
  const FormData = useSelector(RoleFormData);
  const dispatch = useDispatch();
  const fieldChangeHandler = (e) => {
    dispatch(
      UpdateRoleForm({
        value: e.target.value,
        key: e.target.name,
      })
    );
  };

  const checkbocChangeHandler = (value) => {
    let rights = [...FormData.rights];
    const index = rights.findIndex((val) => val === value);

    if (index !== -1) {
      rights.splice(index, 1);
      dispatch(
        UpdateRoleForm({
          value: rights,
          key: 'rights',
        })
      );
    } else {
      dispatch(
        UpdateRoleForm({
          value: [...rights, value],
          key: 'rights',
        })
      );
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

  return (
    <>
      <InputWrapper title="Name">
        <Input
          type="text"
          name="name"
          value={FormData.name}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
      <InputWrapper title="Permission">
        <Box display={'flex'} flexDirection={'column'} w={'50%'}>
          {rights_list}
        </Box>
      </InputWrapper>
    </>
  );
};

export default Role;
