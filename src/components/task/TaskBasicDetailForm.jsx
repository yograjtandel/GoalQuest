import { Input, Select, Textarea } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import { TaskFormData, UpdateTaskForm } from '@/src/store/task/task.slice';
import { useDispatch, useSelector } from 'react-redux';
import { globalData } from '@/src/store/global/global.slice';

const TaskBasicDetailForm = () => {
  const FormData = useSelector(TaskFormData);
  const globalFormData = useSelector(globalData);
  const { projects, tags, users, stages } = globalFormData;

  const dispatch = useDispatch();
  const fieldChangeHandler = (e) => {
    debugger;
    dispatch(
      UpdateTaskForm({
        value: e.target.value,
        key: e.target.name,
      })
    );
  };

  const projectOptions = projects.map((project) => (
    <option value={project.id}>{project.name}</option>
  ));

  const tagsOptions = tags.map((tag) => (
    <option value={tag.id}>{tag.title}</option>
  ));
  const usersOptions = users.map((user) => (
    <option value={user.id}>{user.name}</option>
  ));
  debugger;
  const stagesOptions = stages.map((stage) => (
    <option value={stage.id}>{stage.title}</option>
  ));

  const priorityOptions = ['low', 'medium', 'high', 'urgent'].map(
    (priority) => <option value={priority}>{priority}</option>
  );

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
          {projectOptions}
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
          {usersOptions}
        </Select>
      </InputWrapper>
      <InputWrapper title="Stag">
        <Select
          placeholder="Select option"
          name="stage"
          value={FormData.stage}
          onChange={(e) => fieldChangeHandler(e)}
        >
          {stagesOptions}
        </Select>
      </InputWrapper>
      <InputWrapper title="Tag">
        <Select
          placeholder="Select option"
          name="tag"
          value={FormData.tag}
          onChange={(e) => fieldChangeHandler(e)}
        >
          {tagsOptions}
        </Select>
      </InputWrapper>
      <InputWrapper title="Priority">
        <Select
          placeholder="Select option"
          name="priority"
          value={FormData.priority}
          onChange={(e) => fieldChangeHandler(e)}
        >
          {priorityOptions}
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
