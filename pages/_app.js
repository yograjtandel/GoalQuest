import { ChakraProvider } from '@chakra-ui/react';
import '../public/assets/css/style.css';
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
  )
   
}
