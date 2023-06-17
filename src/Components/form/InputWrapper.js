import { FormControl, FormLabel } from "@chakra-ui/react";

const InputWrapper = (props) => {
  return (
    <FormControl py={2}>
      <FormLabel>{props.title}</FormLabel>
      {props.children}
    </FormControl>
  );
};

export default InputWrapper;
