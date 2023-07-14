import { Button, Input } from '@chakra-ui/react';
import { InputWrapper } from '../form';
import { StageFormData, UpdateStageForm } from '@/src/store/stage/stage.slice';
import { useDispatch, useSelector } from 'react-redux';

const Stage = () => {
  const FormData = useSelector(StageFormData);
  const dispatch = useDispatch();

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
    </>
  );
};

export default Stage;
