import { SimpleGrid, Box } from "@chakra-ui/react";

export function Footer() {
  return (
    <SimpleGrid columns={1}>
      <Box>
        <p>
          Plataforma para encurtação de URLs, onde a cada 90 dias é feita a
          exclusão. Sendo somente para links temporários.
        </p>
      </Box>
    </SimpleGrid>
  );
}
