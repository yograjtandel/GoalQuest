import { Checkbox, Input, Select, Textarea } from "@chakra-ui/react";
import { InputWrapper } from "../form";
const LogTime = () => {
  return (
    <>
      <InputWrapper title="Emp">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <InputWrapper title="HH : MM">
        <Input type="time" />
      </InputWrapper>
      <InputWrapper>
        <Checkbox defaultChecked>Billable</Checkbox>
      </InputWrapper>
      <InputWrapper title="Date">
        <Input type="date" />
      </InputWrapper>
      <InputWrapper title="Note">
        <Textarea placeholder="Here is a sample placeholder" />
      </InputWrapper>
    </>
  );
};
export default LogTime;
