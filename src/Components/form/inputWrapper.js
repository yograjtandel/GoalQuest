import { FormControl, FormLabel } from "@chakra-ui/react";


const InputWrapper = (props) => {
  return (
    <FormControl>
      <FormLabel>{props.title}</FormLabel>
      {props.children}
      {/* <Input type="email" /> */}
    </FormControl>
  );
};

export default InputWrapper;
