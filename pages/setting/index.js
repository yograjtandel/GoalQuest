import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,

} from '@chakra-ui/react';

import Customtab from '@/src/Components/tabpanel';
import { ChevronDownIcon } from '@chakra-ui/icons';
import CustomDrawer from '@/src/Components/drawer';


const setting = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      p={4}
      w={'100%'}
      display={'flex'}
      justifyContent={'start'}
      flexWrap={'wrap'}
    >
      {/* <Accordion w={'70%'} allowToggle={'true'}> */}
      {/* accordion 1 */}
      {/* <AccordionItem title="Stage">
          <InputWrapper title="Name">
            <Input type="text" />
          </InputWrapper>
          <Button
            color={'white'}
            bg={'secondary.400'}
            size={'sm'}
            _hover={{
              bg: 'primary.400',
            }}
          >
            Save
          </Button>
        </AccordionItem> */}
      {/* accordion 2 */}
      {/* <AccordionItem title="Tag">
          <InputWrapper title="Name">
            <Input type="text" />
          </InputWrapper>
          <Button
            color={'white'}
            bg={'secondary.400'}
            size={'sm'}
            _hover={{
              bg: 'primary.400',
            }}
          >
            Save
          </Button>
        </AccordionItem> */}
      {/* accordion 3 */}
      {/* <AccordionItem title="Role">
          <InputWrapper title="Name">
            <Input type="text" />
          </InputWrapper>
          <InputWrapper title="Permission">
            <Box display={'flex'} flexDirection={'column'} w={'50%'}>
              <Checkbox w={'fit-content'} defaultChecked fontWeight={'normal'}>
                Create
              </Checkbox>
              <Checkbox w={'fit-content'} defaultChecked fontWeight={'normal'}>
                Update
              </Checkbox>
              <Checkbox w={'fit-content'} defaultChecked fontWeight={'normal'}>
                Delete
              </Checkbox>
            </Box>
          </InputWrapper>
          <Button
            color={'white'}
            bg={'secondary.400'}
            size={'sm'}
            _hover={{
              bg: 'primary.400',
            }}
          >
            Save
          </Button>
        </AccordionItem> */}
      {/* Accordion 4 */}
      {/* <AccordionItem title="User">
          <InputWrapper title="Role">
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </InputWrapper>
          <InputWrapper title="Email">
            <Input placeholder="test@ncm.com" />
          </InputWrapper>
          <InputWrapper title="Name">
            <Input type="text" />
          </InputWrapper>
          <Button
            color={'white'}
            bg={'secondary.400'}
            size={'sm'}
            _hover={{
              bg: 'primary.400',
            }}
          >
            Save
          </Button>
        </AccordionItem> */}
      {/* </Accordion> */}
      <Box w={'100%'} display={'flex'} justifyContent={'end'}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={
                props.openDrawer === undefined || props.openDrawer !== false
                  ? () => {
                      onOpen();
                    }
                  : () => {
                      return;
                    }
              }
            >
              Stage
            </MenuItem>
            <MenuItem
              onClick={
                props.openDrawer === undefined || props.openDrawer !== false
                  ? () => {
                      onOpen();
                    }
                  : () => {
                      return;
                    }
              }
            >
              Tags
            </MenuItem>
            <MenuItem
              onClick={
                props.openDrawer === undefined || props.openDrawer !== false
                  ? () => {
                      onOpen();
                    }
                  : () => {
                      return;
                    }
              }
            >
              Roles
            </MenuItem>
            <MenuItem
              onClick={
                props.openDrawer === undefined || props.openDrawer !== false
                  ? () => {
                      onOpen();
                    }
                  : () => {
                      return;
                    }
              }
            >
              Emails
            </MenuItem>
          </MenuList>
        </Menu>{' '}
      </Box>
     <Customtab/>
      <CustomDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        maintitle="Task">
        {props.onClickDispaly}
      </CustomDrawer>
    </Box>
  );
};

export default setting;
