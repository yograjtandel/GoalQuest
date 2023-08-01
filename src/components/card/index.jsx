import {
  Card,
  CardBody,
  Text,
  Flex,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import CustomDrawer from '../drawer';
import { BiStar, BiUser, BiCircle } from 'react-icons/bi';

const CustomCard = (props) => {
  const {
    openDrawer,
    bg,
    title,
    id,
    name,
    children,
    footer,
    avatarTolltip,
    onClickDispaly,
    onClick,
    drawer_size,
    draggable,
    onDragStart,
    height,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onclickCard = () => {
    onClick();
    if (openDrawer === undefined || openDrawer !== false) {
      onOpen();
    }
  };

  return (
    <>
      <Card
        w={'100%'}
        h={height || '100%'}
        mb={4}
        bg={undefined || bg}
        onClick={onclickCard}
        onDragStart={(e) => onDragStart(e)}
        _hover={{
          cursor: 'pointer',
          shadow: 'lg',
        }}
        draggable={draggable || false}
        id={id}
      >
        <CardBody>{children}</CardBody>
      </Card>
      <CustomDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        maintitle={title}
        size={drawer_size}
      >
        {onClickDispaly}
      </CustomDrawer>
    </>
  );
};
export default CustomCard;
