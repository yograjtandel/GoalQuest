import { ChakraProvider } from '@chakra-ui/react';
import Theme from '../src/theme/index';
import '../public/assets/css/style.css';
import { Provider } from 'react-redux';
import store from '@/src/store/store';
import { SessionProvider } from 'next-auth/react';
import { NotificationContextProvider } from '@/src/store/context/Notification';

import { Box, Grid, GridItem } from '@chakra-ui/react';

import Sidebar from '../src/components/sidebar';
import Header from '../src/components/header';
import Notification from '@/src/components/ui/Notification';

export default function App({ Component, session, ...pageProps }) {
  return (
    <SessionProvider session={session}>
      <NotificationContextProvider>
        <ChakraProvider theme={Theme}>
          <Provider store={store}>
            <Notification />
            <Box w="100%" h={'100%'} minH={'100vh'}>
              <Grid
                border={'1px solid black'}
                templateAreas={{
                  base: `"main"`,
                  md: `"nav main"`,
                  lg: `nav main`,
                }}
                gridTemplateColumns={'80px 1fr'}
                gap="0"
                color="blackAlpha.700"
                fontWeight="bold"
                minH={'100vh'}
              >
                <GridItem
                  area={'nav'}
                  justifyContent={'start'}
                  alignItems={'start'}
                >
                  <Sidebar display="flex" justifyContent="start" />
                </GridItem>
                <GridItem area={'main'} h={'100%'}>
                  <Header />
                  <Component {...pageProps} />
                </GridItem>
              </Grid>
            </Box>
          </Provider>
        </ChakraProvider>
      </NotificationContextProvider>
    </SessionProvider>
  );
}
