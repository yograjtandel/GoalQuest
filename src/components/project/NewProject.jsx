import { managers, stages } from '@/src/store/global/global.slice';
import { useSelector } from 'react-redux';

const { Input, Select, Textarea } = require('@chakra-ui/react');
const { default: InputWrapper } = require('../form/InputWrapper');

const NewProject = () => {
  const projectStages = useSelector(stages);
  const projectManagers = useSelector(managers);
  console.log(projectStages);
  const stageOptions = projectStages.map((stage) => {
    return (
      <option value={stage.id} key={stage.id}>
        {stage.title}
      </option>
    );
  });
  const managerOptions = projectManagers.map((stage) => {
    debugger;
    return (
      <option value={stage.id} key={stage.id}>
        {stage.name}
      </option>
    );
  });

  const fieldChangeHandler = (e, parentKey) => {
    dispatch(
      UpdateFormData({
        value: e.target.value,
        key: e.target.name,
        parentKey: parentKey,
      })
    );
  };
  return (
    <>
      <InputWrapper title="Title">
        <Input type="text" />
      </InputWrapper>
      <InputWrapper title="Description">
        <Textarea placeholder="Here is a sample placeholder" />
      </InputWrapper>
      <InputWrapper title="Manager">
        <Select placeholder="Select option">{managerOptions}</Select>
      </InputWrapper>
      <InputWrapper title="Stage">
        <Select placeholder="Select option">{stageOptions}</Select>
      </InputWrapper>
      <InputWrapper title="Deadline">
        <Input type="Date" />
      </InputWrapper>
    </>
  );
};

export default NewProject;
