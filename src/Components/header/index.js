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
import CustomDrawer from "../drawer";
import { NewTask } from "../task";
import { useRef, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { NewProject } from "../project";

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");

  const onMenuClickHAndler = (e) => {
    debugger;
    setTitle(e.target.name);
    onOpen();
  };
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
        <Heading fontSize={"1.4rem"}>{props.title}</Heading>
        <Box display={"flex"}>
          <Menu>
            <MenuButton
              as={Button}
              size={"md"}
              colorScheme="teal"
              variant="outline"
              lineHeight={0}
            >
              New
              <AddIcon
                size={"14px"}
                ml={2}
                _hover={{ color: "blue.300", cursor: "pointer" }}
              />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={onMenuClickHAndler} name="ticket">
                Ticket
              </MenuItem>
              <MenuItem onClick={onMenuClickHAndler} name="project">
                Project
              </MenuItem>
            </MenuList>
          </Menu>
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
      <CustomDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        maintitle={`New ${title}`}
      >
        {title === "ticket" && <NewTask />}
        {title === "project" && <NewProject />}
      </CustomDrawer>
    </>
  );
};

export default Header;
