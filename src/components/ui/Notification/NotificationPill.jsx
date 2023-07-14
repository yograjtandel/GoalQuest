import { useState, useEffect } from "react";
import {
  Alert,
  AlertIcon,
  useColorModeValue,
  useDisclosure,
  Slide,
} from "@chakra-ui/react";

const Notification = (props) => {
  //   const [dNone, setdNone] = useState("flex");
  const bg = useColorModeValue("red.100", "gray.700");
  const color = useColorModeValue("Black", "White");
  const { isOpen: isVisible, onClose, onOpen } = useDisclosure();
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
      //   setdNone("none");
    }, 4000);
    onOpen();
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Slide
      direction="right"
      in={isVisible}
      unmountOnExit={true}
      style={{
        zIndex: 10,
        height: "fit-content",
        position: "fix",
      }}
    >
      <Alert
        status={props.status}
        //   color={color}
        //   bg={bg}
        variant="left-accent"
        boxShadow="base"
        p="4"
        mb={2}
        rounded="md"
        // display={dNone}
      >
        <AlertIcon />
        {props.msg}
      </Alert>
    </Slide>
  );
};

export default Notification;
