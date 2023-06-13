import {
  Card,
  CardBody,
  Text,
  Box,
  Flex,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Drawer from "../drawer/Drawer";
import { BiStar, BiUser, BiCircle } from "react-icons/bi";
import NewTask from "../Task/NewTask";
import { useRef, useState } from "react";
const Cards = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Card
        w={"100%"}
        mb={4}
        onClick={() => {
          onOpen();
        }}
        _hover={ {
          cursor:"pointer",
          shadow:'lg'
        }}>
        <CardBody>
          <Text fontWeight={"400"}> {props.title} Title</Text>
          <Text fontWeight={"400"} fontSize={"14px"} color={"gray.500"}>
            {props.name}Name
          </Text>
          <Flex mt={2} justifyContent={"space-between"}>
            <BiStar />
            <Flex>
              <Tooltip
                bg={"white"}
                color={"black"}
                label="Admin"
                aria-label="A tooltip">
                <Text me={2}>
                  <BiUser />
                </Text>
              </Tooltip>
              <BiCircle />
            </Flex>
          </Flex>
        </CardBody>
      </Card>
      <Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <NewTask />
      </Drawer>
    </>
  );
};
export default Cards;
