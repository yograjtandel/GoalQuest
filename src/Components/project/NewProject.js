const { Input, Select, Textarea } = require("@chakra-ui/react");
const { default: InputWrapper } = require("../form/InputWrapper");

const NewProject = () => {
    debugger
  return (
    <>
      <InputWrapper title="Title">
        <Input type="text" />
      </InputWrapper>
      <InputWrapper title="Description">
        <Textarea placeholder="Here is a sample placeholder" />
      </InputWrapper>
      <InputWrapper title="Manager">
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </InputWrapper>
      <InputWrapper title="Deadline">
        <Input type="Date" />
      </InputWrapper>
    </>
  );
};

export default NewProject;
