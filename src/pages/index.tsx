import Head from "next/head";

import { Container, Flex } from "@chakra-ui/react";
import { Footer } from "../components/Footer";

import { ShortUrlForm } from "../components/Form/shorturl";
import { Header } from "../components/Header";

export default function App() {
  return (
    <Container>
      <Head>
        <title>Snipit2U - Snip it!</title>
      </Head>
      <Header />
      <Flex flexDirection="column" justify="center" w="100%" h="500px">
        <ShortUrlForm />
      </Flex>
      <Footer />
    </Container>
  );
}
