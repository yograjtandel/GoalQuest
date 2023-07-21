import { Button, Input } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import {
  SetFormMode,
  StageFormData,
  StageOtherData,
  UpdateStageForm,
} from '@/src/store/stage/stage.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Stage = (props) => {
  const { mode } = props;
  const FormData = useSelector(StageFormData);
  const otherTaskFormData = useSelector(StageOtherData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      SetFormMode({
        ...otherTaskFormData.form_mode,
        stage: mode,
      })
    );
  }, []);

  const fieldChangeHandler = (e) => {
    dispatch(
      UpdateStageForm({
        value: e.target.value,
        key: e.target.name,
      })
    );
  };
  return (
    <>
      <InputWrapper title="Name">
        <Input
          type="text"
          name="title"
          value={FormData.name}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>

      <InputWrapper title="display sequence">
        <Input
          type="number"
          name="display_sequence"
          value={FormData.display_sequence}
          onChange={(e) => fieldChangeHandler(e)}
        />
      </InputWrapper>
    </>
  );
};

export default Stage;
