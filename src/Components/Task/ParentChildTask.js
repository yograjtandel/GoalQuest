import { Input , Select , Textarea } from "@chakra-ui/react";
import { InputWrapper } from "../form";
const ParentChildTask = () => {
  return (
    <>
      <InputWrapper title="Title">
        <Input type="text" />
      </InputWrapper>
      <InputWrapper title="Project">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <InputWrapper title="Deadline">
        <Input type="Date" />
      </InputWrapper>
      <InputWrapper title="Assignee">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <InputWrapper title="Tag">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <InputWrapper title="Description">
        <Textarea placeholder="Here is a sample placeholder" />
      </InputWrapper>
      <InputWrapper title="Priority">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
    </>
  );
};
export default ParentChildTask;
Input;
