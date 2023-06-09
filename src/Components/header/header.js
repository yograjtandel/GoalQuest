import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Drawer from "../drawer/drawer";
import { useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import InputWrapper from "../form/inputWrapper";

const header = () => {
  //   const [newTicket, setNewTicket] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Box
        boxShadow="md"
        p="6"
        py={2}
        bg="white"
        display={"Flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading fontSize={"1.4rem"}>All Tickets</Heading>
        <Box display={"flex"}>
          <Button size={"md"} ref={btnRef} colorScheme="teal" onClick={onOpen}>
            New <BiPlus />
          </Button>
          <Box ms={"3"}>
            <Menu ps={2}>
              <MenuButton borderRadius={"50%"} p={2} as={Button}></MenuButton>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Login/Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
      <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
       <InputWrapper title="hello">
       <Input type='email' />
        </InputWrapper>

      </Drawer>
    </>
  );
};

export default header;
