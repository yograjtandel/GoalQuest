import {
    Grid,
    GridItem,
    Box,
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
              <Header title={"Dashboard"} />
              <Box p={4} w={"100%"} display={"flex"} justifyContent={"start"}>
                
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </>
    );
  };
  
  export default setting;
  