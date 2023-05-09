import { SimpleGrid, Box } from "@chakra-ui/react";

export function Footer() {
  return (
    <SimpleGrid columns={1}>
      <Box>
        <p>
          Platform for URL shortening, where every 90 days deletion is made. It
          is only for temporary links.
        </p>
      </Box>
    </SimpleGrid>
  );
}
