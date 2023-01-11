import { Box, Flex } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justify="space-between">
      <Box>
        <span>Home</span>
      </Box>
      <Box>
        <span>Donate</span>
      </Box>
    </Flex>
  );
}
