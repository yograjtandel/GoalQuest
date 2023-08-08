import { v4 as uuidv4 } from 'uuid';
import { Checkbox, Input, Select, Textarea } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateTaskForm } from '@/src/store/task/task.slice';
import { globalData } from '@/src/store/global/global.slice';
const LogTime = (props) => {
  const { data: FormData, parent_key } = props;
  const globalFormData = useSelector(globalData);
  const { users } = globalFormData;
  const dispatch = useDispatch();

  const fieldChangeHandler = (e) => {
    if (e.target.type !== 'checkbox') {
      dispatch(
        UpdateTaskForm({
          value: e.target.value,
          key: e.target.name,
          parent_key,
        })
      );
    } else {
      dispatch(
        UpdateTaskForm({
          value: e.target.checked,
          key: e.target.name,
          parent_key,
        })
      );
    }
  };

  const usersOptions = users.map((user) => (
    <option value={user.id} key={uuidv4()}>
      {user.name}
    </option>
  ));
  return (
    <>
      <InputWrapper title="Emp">
        <Select
          placeholder="Select option"
          name="employee"
          value={FormData.employee}
          onChange={(e) => fieldChangeHandler(e)}
        >
          {usersOptions}
        </Select>
      </InputWrapper>
      <InputWrapper title="HH : MM">
        <Input
          type="text"
          name="houres"
          value={FormData.houres}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
      <InputWrapper>
        <Checkbox onChange={(e) => fieldChangeHandler(e)} name="billable">Billable</Checkbox>
      </InputWrapper>
      <InputWrapper title="Date">
        <Input
          type="date"
          name="date"
          value={new Date(FormData.date).toISOString().split('T')[0]}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
      <InputWrapper title="Note">
        <Textarea
          placeholder="Here is a sample placeholder"
          name="note"
          value={FormData.note}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
    </>
  );
};
export default LogTime;
