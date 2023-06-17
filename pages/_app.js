import { ChakraProvider } from '@chakra-ui/react';
import Theme from "../src/theme/index";
import '../public/assets/css/style.css';
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
      </ChakraProvider>
  )
   
}
