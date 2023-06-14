import {
  Grid,
  GridItem,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  Button,
  Checkbox,
  Flex,
  Select,
} from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Sidebar from "@/src/Components/sidebar/Sidebar";
import Header from "@/src/Components/header/Header";
import InputWrapper from "@/src/Components/form/InputWrapper";

const setting = () => {
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
            <Header title={"Settings"} />
            <Box p={4} w={"100%"} display={"flex"} justifyContent={"start"}>
              <Accordion w={"70%"} allowToggle={"true"}>
                {/* accordion 1 */}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}>
                        Stage
                      </Box>
                      <AccordionIcon/>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box w={"50%"}>
                      <InputWrapper title="Name">
                        <Input type="text"/>
                      </InputWrapper>
                      <Button
                        color={"white"}
                        bg={"secondary.400"}
                        size={"sm"}
                        _hover={{
                          bg: "primary.400",
                        }}>
                        Save
                      </Button>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                {/* accordion 2 */}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}>
                        Tag
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box w={"50%"}>
                      <InputWrapper title="Name">
                        <Input type="text"/>
                      </InputWrapper>
                      <Button
                        color={"white"}
                        bg={"secondary.400"}
                        size={"sm"}
                        _hover={{
                          bg: "primary.400",
                        }}>
                        Save
                      </Button>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                {/* accordion 3 */}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}>
                        Role
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box w={"50%"}>
                      <InputWrapper title="Name">
                        <Input type="text" />
                      </InputWrapper>
                      <InputWrapper title="Permission">
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          w={"50%"}>
                          <Checkbox
                            w={"fit-content"}
                            defaultChecked
                            fontWeight={"normal"}>
                            Create
                          </Checkbox>
                          <Checkbox
                            w={"fit-content"}
                            defaultChecked
                            fontWeight={"normal"}>
                            Update
                          </Checkbox>
                          <Checkbox
                            w={"fit-content"}
                            defaultChecked
                            fontWeight={"normal"}>
                            Delete
                          </Checkbox>
                        </Box>
                      </InputWrapper>
                      <Button
                        color={"white"}
                        bg={"secondary.400"}
                        size={"sm"}
                        _hover={{
                          bg: "primary.400",
                        }}>
                        Save
                      </Button>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                {/* Accordion 4 */}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontWeight={"bold"}>
                        User
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box w={"50%"}>
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
                        color={"white"}
                        bg={"secondary.400"}
                        size={"sm"}
                        _hover={{
                          bg: "primary.400",
                        }}>
                        Save
                      </Button>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default setting;
