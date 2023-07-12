import { Box } from "@chakra-ui/react";

const NotificationWraper = (props) => {
  return (
    <Box
      pos={"fixed"}
      p={2}
      right={{ base: "unset", md: "0", lg: "0" }}
      top={{ base: "20", md: "20", lg: "32" }}
      w={"400px"}
      zIndex={999}
    >
      {props.children}
    </Box>
  );
};

export default NotificationWraper;
