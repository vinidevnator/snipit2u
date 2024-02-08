import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";

import { Header } from "../../components/Header";

function Privacy() {
  return (
    <Container>
      <Head>
        <title>Snipit2U - Privacy Policy!</title>
      </Head>
      <Header />
      <Box mt="20">
        Only collects data analitycs from Google and Ads to improve earnings.
      </Box>
    </Container>
  );
}

export default Privacy;
