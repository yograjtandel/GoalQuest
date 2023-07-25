import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { useState } from 'react'
import { MultiSelect ,options  } from 'chakra-multiselect'
  const multiselect = () => {
    const [value, setValue] = useState([])
    return (
      <MultiSelect
        options={options}
        value={value}
        label='Choose an item'
        onChange={setValue}
      />
    )
  }
  export default multiselect;