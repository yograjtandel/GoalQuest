import {Box , Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "@/src/Components/sidebar/sidebar";
import Header from "@/src/Components/header/header";
const Ticket = () => {
  return (
    <>
    <Box w='100%' h={'100%'}>
      <Grid
        templateAreas={`"nav main"`}
        gridTemplateColumns={"80px 1fr"}
        gap="0"
        color="blackAlpha.700"
        fontWeight="bold">
        <GridItem area={"nav"}>
          <Sidebar/>
        </GridItem>
        <GridItem bg="green.300" area={"main"} h={'100%'}>
          <Header/>
        </GridItem>
       
      </Grid>
      </Box>
    </>
  );
};
export default Ticket;
