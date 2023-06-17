import React from "react";
import { Flex, Box, Image, List, ListItem } from "@chakra-ui/react";
import logo from "@/public/assets/images/logo.png";
import {
  BiHome,
  BiEdit,
  BiMessageAltDetail,
  BiReceipt,
  BiCog,
} from "react-icons/bi";

const LinkItems = [
  { icon: <BiHome /> },
  { icon: <BiEdit /> },
  // { icon: <BiMessageAltDetail /> },
  // { icon: <BiReceipt /> },
  { icon: <BiCog /> },
];
const sidebar = () => {
  return (
    <Flex
      h={"100%"}
      w={"100%"}
      m={0}
      flexDirection="column"
      boxShadow='xl' p='2' rounded='md' bg='white'>
      <Box
        w={"100%"}
        display={"flex"}
        alignItems="start"
        justifyContent="center"
        p={0}
        >
        <Image src={logo.src} w={"auto"} h={"40px"} alt="logo" />
      </Box>
      <Flex
        pt={5}
        h={"100%"}
        w={"100%"}
        display={"flex"}
        alignItems={"start"}
        justifyContent={"center"}>
        <List>
          {LinkItems.map((item, index) => (
            <ListItem
              p={4}
              w={"100%"}
              fontSize={"21px"}
              cursor={"pointer"}
              _hover={{ bg: `primary.400`, color: "white" }}>
              {item.icon}
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
};
export default sidebar;
