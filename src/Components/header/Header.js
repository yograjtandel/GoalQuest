import {
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,

} from "@chakra-ui/react";
import Drawer from "../drawer/Drawer";
import NewTask from "../Task/NewTask";
import { useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import ParentChildTask from "../Task/ParentChildTask";

const header = (props) => {
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
        alignItems={"center"}>
        <Heading fontSize={"1.4rem"}>{props.title}</Heading>
        <Box display={"flex"}>
          <Button size={"md"} ref={btnRef} colorScheme="teal" onClick={onOpen} variant='outline'lineHeight={0}>
            New <BiPlus m={0} p={0} />
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
      <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} maintitle="New Task">
        <NewTask/>
      </Drawer>
    </>
  );
};

export default header;
