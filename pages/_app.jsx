import { ChakraProvider } from '@chakra-ui/react';
import Theme from '../src/theme/index';
import '../public/assets/css/style.css';
import { Provider, useDispatch } from 'react-redux';
import store from '@/src/store/store';
import { SessionProvider } from 'next-auth/react';
import { NotificationContextProvider } from '@/src/store/context/Notification';

import { Box, Grid, GridItem } from '@chakra-ui/react';

import Sidebar from '../src/components/sidebar';
import Header from '../src/components/header';
import Notification from '@/src/components/ui/Notification';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getInitialData } from '@/src/store/global/global.action';

export default function App({ Component, session, ...pageProps }) {
  const [isWeb, setIsWeb] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.startsWith('/web')) {
      setIsWeb(true);
    }
  }, []);
  return (
    <SessionProvider session={session}>
      <NotificationContextProvider>
        <ChakraProvider theme={Theme}>
          {!isWeb && (
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
                  <GridItem
                    area={'main'}
                    h={'100%'}
                    w={'100%'}
                    overflow={'hidden'}
                  >
                    <Header />
                    <Box p={2}>
                      <Component {...pageProps} />
                    </Box>
                  </GridItem>
                </Grid>
              </Box>
            </Provider>
          )}
          {isWeb && <Component {...pageProps} />}
        </ChakraProvider>
      </NotificationContextProvider>
    </SessionProvider>
  );
}
