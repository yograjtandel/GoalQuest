import { globalData } from '@/src/store/global/global.slice';
import {
  UpdateProjectForm,
  ProjectFormData,
  SetFormMode,
  ProjectOtherData,
} from '@/src/store/project/project.slice';
import { getSelectValue } from '@/src/utility/helper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const { Input, Select, Textarea } = require('@chakra-ui/react');
const { default: InputWrapper } = require('../form/InputWrapper');

const NewProject = (props) => {
  const { mode } = props;
  const { stages, managers } = useSelector(globalData);
  const FormData = useSelector(ProjectFormData);
  const projectOtherData = useSelector(ProjectOtherData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      SetFormMode({
        project: mode,
      })
    );
  }, []);

  const stageOptions = stages.map((stage) => {
    return (
      <option
        value={JSON.stringify({ title: stage.title, id: stage.id })}
        key={stage.id}
      >
        {stage.title}
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

  const fieldChangeHandler = (e) => {
    dispatch(
      UpdateProjectForm({
        value:
          e.target.type === 'select-one'
            ? getSelectValue(e.target.value)
            : e.target.value,
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
          value={JSON.stringify(FormData.stage)}
          onChange={(e) => fieldChangeHandler(e)}
        >
          {stageOptions}
        </Select>
      </InputWrapper>
      <InputWrapper title="Deadline">
        <Input
          type="Date"
          name="deadline"
          value={new Date(FormData.deadline).toISOString().split('T')[0]}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
    </>
  );
};

export default NewProject;
