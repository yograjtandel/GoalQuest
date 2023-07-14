import { managers, stages } from '@/src/store/global/global.slice';
import { CreateProject } from '@/src/store/project/project.action';
import { UpdateProjectForm, formData } from '@/src/store/project/project.slice';
import { useDispatch, useSelector } from 'react-redux';

const { Input, Select, Textarea } = require('@chakra-ui/react');
const { default: InputWrapper } = require('../form/InputWrapper');

const NewProject = () => {
  const projectStages = useSelector(stages);
  const projectManagers = useSelector(managers);
  const FormData = useSelector(formData);
  const dispatch = useDispatch();
  const stageOptions = projectStages.map((stage) => {
    return (
      <option value={stage.id} key={stage.id}>
        {stage.title}
      </option>
    );
  });
  const managerOptions = projectManagers.map((stage) => {
    return (
      <option value={stage.id} key={stage.id}>
        {stage.name}
      </option>
    );
  });

  const fieldChangeHandler = (e) => {
    dispatch(
      UpdateProjectForm({
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
          name="name"
          value={FormData.name}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
      <InputWrapper title="Description">
        <Textarea
          placeholder="Here is a sample placeholder"
          name="description"
          value={FormData.description}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
      <InputWrapper title="Manager">
        <Select
          placeholder="Select option"
          name="manager"
          value={FormData.manager}
          onChange={(e) => fieldChangeHandler(e)}
        >
          {managerOptions}
        </Select>
      </InputWrapper>
      <InputWrapper title="Stage">
        <Select
          placeholder="Select option"
          name="stage"
          value={FormData.stage}
          onChange={(e) => fieldChangeHandler(e)}
        >
          {stageOptions}
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
    </>
  );
};

export default NewProject;
