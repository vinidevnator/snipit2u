import { NextPageContext } from "next";
import Head from "next/head";

import { Container, Flex } from "@chakra-ui/react";
import { Footer } from "../components/Footer";

import { ShortUrlForm } from "../components/Form/shorturl";
import { Header } from "../components/Header";

export default function App() {
  return (
    <Container>
      <Head>
        <title>Beenly - Short url!</title>
      </Head>
      <Header />
      <Flex flexDirection="column" justify="center" w="100%" h="500px">
        <ShortUrlForm />
      </Flex>
      <Footer />
    </Container>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  if (context.query.c) {
    const shortUrlId = context.query.c as string;
    const baseUrl = process.env.BASE_URL as string;

    const dns = await import("node:dns");
    dns.setDefaultResultOrder("ipv4first");

    const urlToFetch = new URL(
      baseUrl + `/api/shortlink/get?shortUrl=` + shortUrlId
    );

    let { getUrl } = await fetch(urlToFetch, {
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => await response.json())
      .catch((error) => {
        console.log(error);
      });

    if (getUrl.startsWith("www")) {
      getUrl = "http://" + getUrl;
    }

    return {
      redirect: {
        destination: getUrl ?? "/",
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
}
