import { MultiSelect } from 'chakra-multiselect';
import { useState } from 'react';

const Multiselect = (props) => {
  const { options, value, onChange, state_key } = props;
  const [assignee, setAssignee] = useState([]);
  //   const [value, setValue] = useState([]);
  //   const onChange = (e) => {};
  return (
    <MultiSelect
      options={options}
      value={value}
      onChange={(e) => {
        debugger
        return onChange({ value: e, key: state_key });
        // return onChange(e);
      }}
    />
    // <MultiSelect
    //   options={options}
    //   value={assignee}
    //   onChange={(e) => setAssignee(e)}
    // />
  );
};
export default Multiselect;
