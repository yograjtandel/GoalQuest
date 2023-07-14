import { Input, Select, Textarea } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import { TaskFormData, UpdateTaskForm } from '@/src/store/task/task.slice';
import { useDispatch, useSelector } from 'react-redux';
const TaskBasicDetailForm = () => {
  const FormData = useSelector(TaskFormData);
  const dispatch = useDispatch();
  const fieldChangeHandler = (e) => {
    dispatch(
      UpdateTaskForm({
        value: e.target.value,
        key: e.target.name,
      })
    );
  };
  return (
    <>
      <InputWrapper title="Title">
        <Input
          type="text"
          name="title"
          value={FormData.title}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
      <InputWrapper title="Project">
        <Select
          placeholder="Select option"
          name="project_id"
          value={FormData.project_id}
          onChange={(e) => fieldChangeHandler(e)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <InputWrapper title="Deadline">
        <Input
          type="Date"
          name="deadline"
          value={FormData.deadline}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
      <InputWrapper title="Assignee">
        <Select
          placeholder="Select option"
          name="asignee"
          value={FormData.asignee}
          onChange={(e) => fieldChangeHandler(e)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <InputWrapper
        title="Tag"
        name="tag"
        value={FormData.tag}
        onChange={(e) => fieldChangeHandler(e)}
      >
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <InputWrapper title="Priority">
        <Select
          placeholder="Select option"
          name="priority"
          value={FormData.priority}
          onChange={(e) => fieldChangeHandler(e)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <InputWrapper
        title="Description"
        name="description"
        value={FormData.description}
        onChange={(e) => fieldChangeHandler(e)}
      >
        <Textarea placeholder="Here is a sample placeholder" />
      </InputWrapper>
    </>
  );
};
export default TaskBasicDetailForm;
