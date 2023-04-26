import { Container, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Footer } from "../components/Footer";

import { ShortUrlForm } from "../components/Form/shorturl";
import { Header } from "../components/Header";
import { NextPageContext } from "next";

interface IGetResponse {
  getUrl: string;
  message: string;
}

export default function App() {
  const router = useRouter();

  return (
    <Container>
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
    const shortUrlId = context.query.c;
    const baseUrl = process.env.BASE_URL as string;

    const fetchUrl = await fetch(
      baseUrl + `/api/shortlink/get?shortUrl=` + shortUrlId
    ).then(async (response) => await response.json());

    const { getUrl } = fetchUrl;

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
