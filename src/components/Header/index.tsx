import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  function handleOnClick() {
    router.push("/");
  }
  return (
    <Flex justify="space-between" mt="2">
      <Box>
        <Button
          color="white"
          type="submit"
          variant="link"
          onClick={handleOnClick}
        >
          Home
        </Button>
      </Box>
      <Box>
        <Link href="/privacy">
          <Button type="submit" color="white" variant="link" h="/privacy">
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
  );
}
