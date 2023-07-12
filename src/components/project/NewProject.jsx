const { Input, Select, Textarea } = require('@chakra-ui/react');
const { default: InputWrapper } = require('../form/InputWrapper');

const NewProject = (props) => {
  const { stages } = props;
  debugger;
  const stageOptions = stages.map((stage) => (
    <option value={stage.id}>{stage.title}</option>
  ));
  return (
    <>
      <InputWrapper title="Title">
        <Input type="text" />
      </InputWrapper>
      <InputWrapper title="Description">
        <Textarea placeholder="Here is a sample placeholder" />
      </InputWrapper>
      <InputWrapper title="Manager">
        <Select placeholder="Select option">{stageOptions}</Select>
      </InputWrapper>
      <InputWrapper title="Stage">
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

export const getServerSideProps = async () => {
  let stageDoc = [];
  try {
    const res = await action({
      method: 'get',
      url: '/v1/stage?limit=0',
    });
    stageDoc = res.data.results;
  } catch (e) {
    console.log(e);
  }

  return { props: { stages: stageDoc } };
};

export default NewProject;
