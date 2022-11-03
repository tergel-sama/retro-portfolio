import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "98.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />{" "}
    </ChakraProvider>
  );
}

export default MyApp;
