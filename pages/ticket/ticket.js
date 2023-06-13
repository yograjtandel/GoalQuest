import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Sidebar from "@/src/Components/sidebar/Sidebar";
import Header from "@/src/Components/header/Header";
import Card from "@/src/Components/card/Card";
const Ticket = () => {
  return (
    <>
      <Box w="100%" h={"100%"} minH={"100vh"}>
        <Grid
          border={"2px solid black"}
          templateAreas={{base:`"main"`, md:`"nav main"`, lg:`nav main`}}
          gridTemplateColumns={"80px 1fr"}
          gap="0"
          color="blackAlpha.700"
          fontWeight="bold"
          minH={"100vh"}>
          <GridItem area={"nav"} justifyContent={"start"} alignItems={"start"}>
            <Sidebar display="flex" justifyContent="start" />
          </GridItem>
          <GridItem area={"main"} h={"100%"} >
            <Header />
            <Box p={2}>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <GridItem>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    p={3}>
                    <Flex
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      w={"100%"}
                      px={4}
                      pb={4}>
                      <Text>To Do </Text>
                      <AddIcon Size={"14px"} _hover={{ color: "blue.300", cursor: "pointer" }}/>
                    </Flex>
                    <Card title={"hello"} name={"Css Changes"} />
                    <Card />
                  </Box>
                </GridItem>
                <GridItem>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    p={3}>
                    <Flex
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      w={"100%"}
                      px={4}
                      pb={4}>
                      <Text>In Progress </Text>
                      <AddIcon
                        Size={"14px"}
                        _hover={{ color: "blue.300", cursor: "pointer" }}
                      />
                    </Flex>
                    <Card />
                  </Box>
                </GridItem>
                <GridItem>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    p={3}
                  >
                    <Flex
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      w={"100%"}
                      px={4}
                      pb={4}>
                      <Text>Testing </Text>
                      <AddIcon
                        Size={"14px"}
                        _hover={{ color: "blue.300", cursor: "pointer" }}
                      />
                    </Flex>
                    <Card />
                  </Box>
                </GridItem>
                <GridItem>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    p={3}>
                    <Flex
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      w={"100%"}
                      px={4}
                      pb={4}>
                      <Text>Deployed</Text>
                      <AddIcon
                        Size={"14px"}
                        _hover={{ color: "blue.300", cursor: "pointer" }}
                      />
                    </Flex>
                    <Card />
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default Ticket;