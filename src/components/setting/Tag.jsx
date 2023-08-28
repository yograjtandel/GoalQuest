import { Input } from '@chakra-ui/react';
import {
  SetFormMode,
  TagFormData,
  TagOtherData,
  UpdateTagForm,
} from '@/src/store/tag/tag.slice';
import { useDispatch, useSelector } from 'react-redux';
import { InputWrapper } from '../form';
import { useEffect } from 'react';

const Tag = (props) => {
  const FormData = useSelector(TagFormData);
  const { mode } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      SetFormMode({
        tag: mode,
      })
    );
  }, []);

  const fieldChangeHandler = (e) => {
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
