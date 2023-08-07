import { Button, Checkbox, Input, Select } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import { useDispatch, useSelector } from 'react-redux';
import { globalData } from '@/src/store/global/global.slice';
import { useEffect } from 'react';
import {
  SetFormMode,
  UpdateUserForm,
  UserFormData,
} from '@/src/store/user/user.slice';

const User = (props) => {
  const dispatch = useDispatch();
  const FormData = useSelector(UserFormData);
  const { managers, roles } = useSelector(globalData);
  const { mode } = props;

  useEffect(() => {
    dispatch(
      SetFormMode({
        user: mode,
      })
    );
  }, []);

  const fieldChangeHandler = (e) => {
    dispatch(
      UpdateUserForm({
        value: e.target.value,
        key: e.target.name,
      })
    );
  };

  const roleOptions = roles.map((role) => {
    return (
      <option value={role.id} key={role.id}>
        {role.name}
      </option>
    );
  });

  const managerOptions = managers.map((manager) => {
    return (
      <option value={manager.email} key={manager.id}>
        {manager.name}
      </option>
    );
  });

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
      <InputWrapper title="Email">
        <Input
          placeholder="test@ncm.com"
          name="email"
          value={FormData.email}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
      <InputWrapper title="Password">
        <Input
          type="password"
          name="password"
          value={FormData.password}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
      <InputWrapper title="Role">
        <Select
          placeholder="Select option"
          name="role"
          value={FormData.role}
          onChange={(e) => fieldChangeHandler(e)}
        >
          {roleOptions}
        </Select>
      </InputWrapper>
      <InputWrapper title="Reporting Manager">
        <Select
          placeholder="Select option"
          name="reporting_manager"
          value={FormData.reporting_manager}
          onChange={(e) => fieldChangeHandler(e)}
        >
          {managerOptions}
        </Select>
      </InputWrapper>
    </>
  );
};

export default User;
