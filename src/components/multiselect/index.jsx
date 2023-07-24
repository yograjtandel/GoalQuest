import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { useState } from 'react';
import { MultiSelect } from 'chakra-multiselect';

const options = [
  { label: 'Test', value: 'test' },
  { label: 'Test1', value: 'test1' },
];
const multiselect = () => {
  const [value, setValue] = useState([]);
  const onChange = (e) => {
    debugger;
  };
  return (
    <MultiSelect
      options={options}
      value={value}
      label="Choose an item"
      onChange={onChange}
    />
  );
};
export default multiselect;
