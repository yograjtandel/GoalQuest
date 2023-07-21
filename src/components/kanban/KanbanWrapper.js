import React from 'react';
import { Box } from '@chakra-ui/react';

export default function KanbanWrapper(props) {

  return (
    <Box w={'300px'} minWidth={'300px'}>
      <Box
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
        p={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
