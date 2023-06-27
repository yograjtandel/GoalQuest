import { ChakraProvider } from '@chakra-ui/react';
import Theme from '../src/theme/index';
import '../public/assets/css/style.css';
import { Provider } from 'react-redux';
import store from '@/src/store/store';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '@/src/Components/sidebar';
import Header from '@/src/Components/header';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Provider store={store}>
        <Box w="100%" h={'100%'} minH={'100vh'} minW={'100vw'} overflow={'hidden'}>
          <Grid
            templateAreas={{ base: `"main"`, md: `"nav main"`, lg: `"nav main"` }}
            gridTemplateColumns={'80px '}
            gap="0"
            color="blackAlpha.700"
            fontWeight="bold"
            minH={'100vh'}
            overflow={'hidden'}>
            <GridItem
              area={'nav'}
              justifyContent={'start'}
              alignItems={'start'}>
              <Sidebar display="flex" justifyContent="start" />
            </GridItem>
            <GridItem
              area={'main'}
              overflowX={'hidden'} 
              overflowY={'hidden'}
            >
              <Header title={'All Tickets'} />
              <Component {...pageProps} />
            </GridItem>
          </Grid>
        </Box>
      </Provider>
    </ChakraProvider>
  );
}
