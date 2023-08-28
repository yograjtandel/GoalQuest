import { v4 as uuidv4 } from 'uuid';
import { Input, Select, Textarea } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import { UpdateTaskForm } from '@/src/store/task/task.slice';
import { useDispatch, useSelector } from 'react-redux';
import { globalData } from '@/src/store/global/global.slice';
import { getSelectValue } from '@/src/utility/helper';
import Multiselect from '../form/multiselect';
import { useState } from 'react';

const TaskBasicDetailForm = (props) => {
  const { data: FormData, parent_key } = props;

  const globalFormData = useSelector(globalData);
  const [assignee, setAssignee] = useState([]);
  const { projects, tags, users, stages } = globalFormData;
  const dispatch = useDispatch();
  const fieldChangeHandler = (e) => {
    let value;
    if (e.target.type === 'date')
      value = new Date(e.target.value).toISOString().split('T')[0];
    else if (e.target.type === 'select-one')
      value = getSelectValue(e.target.value);
    else value = e.target.value;

    dispatch(
      UpdateTaskForm({
        value: value,
        key: e.target.name,
        parent_key,
      })
    );
  };

  const MultiselectChangeHandler = (args) => {
    const { value, key } = args;
    debugger;
    setAssignee((prev) => [...prev, ...value]);
    dispatch(
      UpdateTaskForm({
        value: value,
        key: key,
        parent_key,
      })
    );
  };

  const projectOptions = projects.map((project) => (
    <option
      value={JSON.stringify({ name: project.name, id: project.id })}
      key={project.id}
    >
      {project.name}
    </option>
  ));

  const tagsOptions = tags.map((tag) => (
    <option
      value={JSON.stringify({ title: tag.title, id: tag.id })}
      key={tag.id}
    >
      {tag.title}
    </option>
  ));

  const usersOptions = users.map((user) => ({
    label: user.name,
    value: user.email,
  }));
  const stagesOptions = stages.map((stage) => (
    <option
      value={JSON.stringify({ title: stage.title, id: stage.id })}
      key={uuidv4()}
    >
      {stage.title}
    </option>
  ));

  const priorityOptions = ['low', 'medium', 'high', 'urgent'].map(
    (priority) => (
      <option value={priority} key={uuidv4()}>
        {priority}
      </option>
    )
  );
  console.log(assignee);
  console.log(FormData.asignee);
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
          name="project"
          value={JSON.stringify(FormData.project)}
          onChange={(e) => fieldChangeHandler(e)}
        >
          {projectOptions}
        </Select>
      </InputWrapper>
      <InputWrapper title="Deadline">
        <Input
          type="Date"
          name="deadline"
          //     value='1994-10-04'
          // //   value="2023-07-25"
          value={new Date(FormData.deadline).toISOString().split('T')[0]}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
      <InputWrapper title="Assignee">
        <Multiselect
          options={usersOptions}
          value={assignee}
          //   value={FormData.asignee}
          //   onChange={setAssignee}
          onChange={MultiselectChangeHandler}
          state_key={'assignee'}
          //   parent_key="task"
        />
        {/*<Select
          placeholder="Select option"
          name="asignee"
          value={FormData.asignee[0]}
          onChange={(e) => fieldChangeHandler(e)}
        >
          {usersOptions}
  </Select>*/}
      </InputWrapper>
      <InputWrapper title="Stag">
        <Select
          placeholder="Select option"
          name="stage"
          value={JSON.stringify(FormData.stage)}
          onChange={(e) => fieldChangeHandler(e)}
        >
          {stagesOptions}
        </Select>
      </InputWrapper>
      <InputWrapper title="Tag">
        <Select
          placeholder="Select option"
          name="tag"
          value={JSON.stringify(FormData.tag)}
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
