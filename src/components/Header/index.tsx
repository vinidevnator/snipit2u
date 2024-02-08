import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
  return (
    <Flex mt="2">
      <Box padding="2" borderRadius="8" backdropBlur="base" border="2px">
        <Text fontSize="xl" fontWeight="bold" color="red" textAlign="center">
          snipit2u
        </Text>
      </Box>
      <Flex w="100%" justify="space-between" align="center">
        <Box ml="2">
          <Link href="/">
            <Button color="white" type="submit" variant="link">
              Home
            </Button>
          </Link>
        </Box>
        <Box>
          <Link href="/privacy">
            <Button type="submit" color="white" variant="link">
              Privacy
            </Button>
          </Link>
        </Box>
        <Box>
          <Button disabled type="submit" variant="link">
            Donate
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
