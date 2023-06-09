import React from "react";
import {
  CloseButton,
  Flex,
  Text,
  Box,
  Image,
  ListIcon,
  NavItem,
  List,
  Button,
  ListItem,

} from "@chakra-ui/react";
import logo from "@/public/assets/images/logo.png";
import {
  BiHome,
  BiSolidDashboard,
  BiEdit,
  BiMessageAltDetail,
  BiReceipt,
} from "react-icons/bi";

const LinkItems = [
  { icon: <BiHome /> },
//   { icon: <BiSolidDashboard /> },
  { icon: <BiEdit /> },
  { icon: <BiMessageAltDetail /> },
  { icon: <BiReceipt /> },
];
const sidebar = () => {
  return (
    <Flex h={"100%"} w={"100%"} m={0} flexDirection="column">
      <Box
        border={"1px solid"}
        w={"100%"}
        display={"flex"}
        alignItems="center"
        justifyContent="center">
        <Image src={logo.src} w={"auto"} h={"40px"} alt="logo" border={"1px solid red"}/>
      </Box>
      <Flex border={"1px solid red"} h={"100%"} w={"100%"} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <List >
           {LinkItems.map((item, index) => (
            <ListItem p={4} _hover={{ bg: "teal.600" }}>{item.icon}</ListItem>
          ))}          
        </List>
      </Flex>

      {/* <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} /> */}
    </Flex>
  );
};
export default sidebar;
