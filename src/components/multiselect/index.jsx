import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {  MultiSelectTheme } from 'chakra-multiselect'
import { useState } from 'react'
import { MultiSelect ,options  } from 'chakra-multiselect'



const theme = extendTheme({
    components: {
      MultiSelect: MultiSelectTheme
    }
  })



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