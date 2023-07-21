import { Input } from '@chakra-ui/react';
import {
  SetFormMode,
  TagFormData,
  TagOtherData,
  UpdateTagForm,
} from '@/src/store/tag/tag.slice';
import { useDispatch, useSelector } from 'react-redux';
import { InputWrapper } from '../form';

const Tag = () => {
  const FormData = useSelector(TagFormData);
  const dispatch = useDispatch();
  const otherTaskFormData = useSelector(TagOtherData);

  const fieldChangeHandler = (e) => {
    dispatch(
      SetFormMode({
        ...otherTaskFormData.form_mode,
        stage: mode,
      })
    );
    dispatch(
      UpdateTagForm({
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
    </>
  );
};

export default Tag;
