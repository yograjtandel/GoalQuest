import React from 'react';
import { Box } from '@chakra-ui/react';

export default function KanbanWrapper(props) {
  const { onDrop } = props;

  const drop = async (e) => {
    e.preventDefault();
    await onDrop(e);
  };

  return (
    <Box w={'300px'} minWidth={'300px'}>
      <Box
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
        p={3}
        name={`${props.name}`}
        className={`dropzone-${props.id}`}
        onDrop={(e) => drop(e)}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDragEnter={(e) => {
          // console.log(e.currentTarget.contains(e.target));
          // console.log(e.currentTarget);
          // console.log(e.target);
          console.log('===================enter');
          if (e.currentTarget.classList.contains(`dropzone-${props.id}`)) {
            e.currentTarget.classList.add('active-drop-zone');
          }
        }}
        onDragLeave={function (e) {
          const parent = e.target.closest(`#dropzone-${props.id}`);
          // debugger;
          console.log(e.target);
          // console.log(e.currentTarget.contains(e.target));
          console.log(e.currentTarget);
          //   console.log(e.currentTarget.children[0]);
          //   console.log(e.currentTarget.contains(e.target));
          console.log('===================leave');

        //   let isRemoveClass = true;
        //   if (
        //     e.target !== e.currentTarget &&
        //     e.currentTarget.contains(e.target)
        //   ) {
        //     isRemoveClass = false;
        //   }
          if (
            // e.target === e.currentTarget &&
            e.target.classList.contains(`dropzone-${props.id}`)
            // && !e.currentTarget.childNodes.contains(e.target)
          ) {
            e.currentTarget.classList.remove('active-drop-zone');
          }
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
