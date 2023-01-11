import { Container, Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Footer } from "../components/Footer";

import { ShortUrlForm } from "../components/Form/shorturl";
import { Header } from "../components/Header";

export default function App() {
  const router = useRouter();
  const { c } = router.query;

  useEffect(() => {
    if (c) {
      fetch(`/api/shortlink/get?shortUrl=` + c).then((res) => {
        res.json().then((data) => {
          window.location.replace(data.getUrl);
        });
      });
    }
  }, [c]);

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
