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
import CustomCard from "@/src/components/card";
import { NewTask } from "@/src/components/task";
const Ticket = () => {
  return (
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
                    size={"14px"}
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
            <CustomCard
              title={"hello"}
              name={"Css Changes"}
              onClickDispaly={<NewTask />}
            />
            <CustomCard
              title={"hello"}
              name={"Css Changes"}
              onClickDispaly={<NewTask />}
            />
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
                    size={"14px"}
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
            <CustomCard
              title={"hello"}
              name={"Css Changes"}
              onClickDispaly={<NewTask />}
            />
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
                    size={"14px"}
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
            <CustomCard
              title={"hello"}
              name={"Css Changes"}
              onClickDispaly={<NewTask />}
            />
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
                    size={"14px"}
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
            <CustomCard
              title={"hello"}
              name={"Css Changes"}
              onClickDispaly={<NewTask />}
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default Ticket;
