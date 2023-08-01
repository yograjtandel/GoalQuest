import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
const Customtable = (props) => {
  const [keys, setKeys] = useState([]);
  const [Headings, setHeadings] = useState([]);
  const { data, heading } = props;

  useEffect(() => {
    const { key, Headings } = Object.keys(heading).reduce(
      (acc, curr) => {
        acc['key'] = [...acc['key'], curr];

        acc['Headings'] = [...acc['Headings'], heading[curr]];
        return acc;
      },
      { key: [], Headings: [] }
    );
    setKeys(key);
    setHeadings(Headings);
  }, []);

  //   <Td display={'flex'} justifyContent={'center'}>
  //   <Button
  //     bg={'none'}
  //     variant="solid"
  //     _hover={{ bg: 'none', color: 'primary.400' }}
  //   >
  //     {<EditIcon />}
  //   </Button>
  //   <Button
  //     ms={2}
  //     bg={'none'}
  //     variant="solid"
  //     _hover={{ bg: 'none', color: 'red' }}
  //   >
  //     {<DeleteIcon />}
  //   </Button>
  // </Td>

  const tableHeading = Headings.map((heading) => <Th>{heading}</Th>);
  
  const tableRow = data.map((item) => {
    return (
      <Tr key={uuidv4()}>
        {keys.map((key) => (
          <Td key={uuidv4()}>{item[key]}</Td>
        ))}
      </Tr>
    );
  });
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>{tableHeading}</Tr>
        </Thead>
        <Tbody>{tableRow}</Tbody>
      </Table>
    </TableContainer>
  );
};
export default Customtable;
