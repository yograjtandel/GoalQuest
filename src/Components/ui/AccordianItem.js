import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  Button,
  Checkbox,
  Select,
} from '@chakra-ui/react';

const CustomAccordinaItem = (props) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" fontWeight={'bold'}>
            {props.title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Box w={'50%'}>{props.children}</Box>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default CustomAccordinaItem;
