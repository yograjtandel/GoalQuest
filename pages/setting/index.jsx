import {
  Box,
  Accordion,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react';

import Tag from '@/src/components/setting/Tag';
import action from '@/src/utility/action';
import Stage from '@/src/components/setting/Stage';
import Role from '@/src/components/setting/Role';
import User from '@/src/components/setting/User';

import Customtab from '@/src/components/tabpanel';
import { ChevronDownIcon } from '@chakra-ui/icons';
import CustomDrawer from '@/src/components/drawer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getInitialData } from '@/src/store/global/global.action';

const setting = (props) => {
  const { rights } = props.pageProps;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  const onMenuClickHAndler = (e) => {
    setTitle(e.target.name);
    onOpen();
  };
  return (
    <Box
      p={4}
      w={'100%'}
      display={'flex'}
      justifyContent={'start'}
      flexWrap={'wrap'}
    >
      <Box w={'100%'} display={'flex'} justifyContent={'end'}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem onClick={onMenuClickHAndler} name="stage">
              Stage
            </MenuItem>
            <MenuItem onClick={onMenuClickHAndler} name="tag">
              Tag
            </MenuItem>
            <MenuItem onClick={onMenuClickHAndler} name="role">
              Role
            </MenuItem>
            <MenuItem onClick={onMenuClickHAndler} name="user">
              User
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Customtab />
      <CustomDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        maintitle={title}
      >
        {title === 'stage' && <Stage mode="create" />}
        {title === 'tag' && <Tag mode="create" />}
        {title === 'role' && <Role rights={rights} mode="create" />}
        {title === 'user' && <User mode="create" />}
      </CustomDrawer>
    </Box>
  );
};

export default setting;

export const GetStaticProps = async () => {
  let rightsDoc = [];
  try {
    const res = await action({
      method: 'get',
      url: '/v1/rights?limit=0',
    });
    rightsDoc = res.data.results;
  } catch (e) {
    console.log(e);
  }

  return { props: { rights: rightsDoc } };
};
