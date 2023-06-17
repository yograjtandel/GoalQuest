import { v4 as uuidv4 } from "uuid";
import React from "react";
import NextLink from "next/link";
import { Flex, Box, Image, List, ListItem, Link } from "@chakra-ui/react";
import logo from "@/public/assets/images/logo.png";
import { BiHome, BiTask, BiLayerPlus, BiCog } from "react-icons/bi";

const LinkItems = [
  { icon: <BiHome />, href: "/ticket" },

  { icon: <BiLayerPlus />, href: "/project" },
  { icon: <BiTask />, href: "/ticket" },
  { icon: <BiCog />, href: "/setting" },
];
const Sidebar = () => {
  return (
    <Flex
      h={"100%"}
      w={"100%"}
      m={0}
      flexDirection="column"
      boxShadow="xl"
      p="2"
      rounded="md"
      bg="white"
    >
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
        justifyContent={"center"}
      >
        <List>
          {LinkItems.map((item, index) => (
            <ListItem
              p={4}
              w={"100%"}
              fontSize={"21px"}
              cursor={"pointer"}
              _hover={{ bg: `primary.400`, color: "white" }}
              key={uuidv4()}
            >
              <Link as={NextLink} href={item.href} w={100} h={100}>
                {item.icon}
              </Link>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Flex>
  );
};
export default Sidebar;
