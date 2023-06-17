import {
  Card,
  CardBody,
  Text,
  Flex,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import CustomDrawer from "../drawer";
import { BiStar, BiUser, BiCircle } from "react-icons/bi";
import NewTask from "../task/NewTask";

const CustomCard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        w={"100%"}
        mb={4}
        onClick={() => {
          onOpen();
        }}
        _hover={{
          cursor: "pointer",
          shadow: "lg",
        }}
      >
        <CardBody>
          <Text fontWeight={"400"}> {props.title}</Text>
          <Text fontWeight={"400"} fontSize={"14px"} color={"gray.500"}>
            {props.name}
          </Text>
          {props.children}
          <Flex mt={2} justifyContent={"space-between"}>
            <BiStar />
            <Flex>
              <Tooltip
                bg={"white"}
                color={"black"}
                label="Admin"
                aria-label="A tooltip"
              >
                <Text me={2}>
                  <BiUser />
                </Text>
              </Tooltip>
              <BiCircle />
            </Flex>
          </Flex>
        </CardBody>
      </Card>
      <CustomDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        maintitle="Task"
      >
        {props.onClickDispaly}
      </CustomDrawer>
    </>
  );
};
export default CustomCard;
