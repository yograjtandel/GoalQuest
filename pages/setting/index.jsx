import {
  Box,
  Accordion,
} from '@chakra-ui/react';

import Tag from '@/src/components/setting/Tag';
import action from '@/src/utility/action';
import Stage from '@/src/components/setting/Stage';
import Role from '@/src/components/setting/Role';
import User from '@/src/components/setting/User';

const setting = (props) => {
  const { rights } = props.pageProps;
  
  return (
    <Box p={4} w={'100%'} display={'flex'} justifyContent={'start'}>
      <Accordion w={'70%'} allowToggle={'true'}>
        {/* accordion 1 */}
        <Stage />
        {/* accordion 2 */}
        <Tag />
        {/* accordion 3 */}
        <Role rights={rights} />
        {/* Accordion 4 */}
        <User />
      </Accordion>
    </Box>
  );
};

export default setting;

export const getServerSideProps = async () => {
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
