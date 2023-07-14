import {Table,
Thead,
Tbody,
Tr,
Th,
Td,
TableContainer,
Button,
} from '@chakra-ui/react';
import { DeleteIcon , EditIcon } from '@chakra-ui/icons';
const Customtable = () => {
    return (
        <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Stage Name</Th>
              <Th textAlign='Center'>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Xyz</Td>
              <Td display={'flex'} justifyContent={'center'}>
                <Button bg={'none'}  variant="solid" _hover={{bg:'none' , color:'primary.400'}} >
                  {<EditIcon />}
                </Button>
                <Button ms={2} bg={'none'}  variant="solid" _hover={{bg:'none' , color:'red'}}>
                  {<DeleteIcon />}
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    );
}
export default Customtable;