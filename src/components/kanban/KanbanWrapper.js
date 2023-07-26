import React from 'react';
import { Box } from '@chakra-ui/react';

export default function KanbanWrapper(props) {
  return (
    <Box w={'300px'} minWidth={'300px'} h={'100%'}>
      <Box
        display={'flex'}
    //  h={'100%'}
        flexDirection={'column'}
        // alignItems={'center'}
      >
        {props.children}
      </Box>
    </Box>
  );
}
