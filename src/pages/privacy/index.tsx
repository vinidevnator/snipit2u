import { Box, Container } from "@chakra-ui/react";
import { Header } from "../../components/Header";

function Privacy() {
  return (
    <Container>
      <Header />
      <Box mt="20">
        Only collects data analitycs from Google and Ads to improve earnings.
      </Box>
    </Container>
  );
}

export default Privacy;
