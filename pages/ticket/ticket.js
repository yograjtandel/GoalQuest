import {
  Box,
  Flex,
  Grid,
  GridItem,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Sidebar from "@/src/Components/sidebar/Sidebar";
import Header from "@/src/Components/header/Header";
import Card from "@/src/Components/card/Card";
const Ticket = () => {
  return (
    <>
      <Box w="100%" h={"100%"} minH={"100vh"}>
        <Grid
          border={"1px solid black"}
          templateAreas={{ base: `"main"`, md: `"nav main"`, lg: `nav main` }}
          gridTemplateColumns={"80px 1fr"}
          gap="0"
          color="blackAlpha.700"
          fontWeight="bold"
          minH={"100vh"}
        >
          <GridItem area={"nav"} justifyContent={"start"} alignItems={"start"}>
            <Sidebar display="flex" justifyContent="start" />
          </GridItem>
          <GridItem area={"main"} h={"100%"}>
            <Header  title={"All Tickets"}/>
            <Box p={2}>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
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
                      pb={4}
                    >
                      <Text>To Do </Text>
                      <Menu>
                        <MenuButton as={Button} bg={"none"}>
                          <AddIcon
                            Size={"14px"}
                            _hover={{ color: "blue.300", cursor: "pointer" }}
                          />
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Download</MenuItem>
                          <MenuItem>Create a Copy</MenuItem>
                          <MenuItem>Mark as Draft</MenuItem>
                          <MenuItem>Delete</MenuItem>
                          <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                      </Menu>
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
                    p={3}
                  >
                    <Flex
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      w={"100%"}
                      px={4}
                      pb={4}
                    >
                      <Text>In Progress </Text>
                      <Menu>
                        <MenuButton as={Button} bg={"none"}>
                          <AddIcon
                            Size={"14px"}
                            _hover={{ color: "blue.300", cursor: "pointer" }}
                          />
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Download</MenuItem>
                          <MenuItem>Create a Copy</MenuItem>
                          <MenuItem>Mark as Draft</MenuItem>
                          <MenuItem>Delete</MenuItem>
                          <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                      </Menu>
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
                      pb={4}
                    >
                      <Text>Testing </Text>
                      <Menu>
                        <MenuButton as={Button} bg={"none"}>
                          <AddIcon
                            Size={"14px"}
                            _hover={{ color: "blue.300", cursor: "pointer" }}
                          />
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Download</MenuItem>
                          <MenuItem>Create a Copy</MenuItem>
                          <MenuItem>Mark as Draft</MenuItem>
                          <MenuItem>Delete</MenuItem>
                          <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                      </Menu>
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
                      pb={4}
                    >
                      <Text>Deployed</Text>
                      <Menu>
                        <MenuButton as={Button} bg={"none"}>
                          <AddIcon
                            Size={"14px"}
                            _hover={{ color: "blue.300", cursor: "pointer" }}
                          />
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Download</MenuItem>
                          <MenuItem>Create a Copy</MenuItem>
                          <MenuItem>Mark as Draft</MenuItem>
                          <MenuItem>Delete</MenuItem>
                          <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                      </Menu>
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
