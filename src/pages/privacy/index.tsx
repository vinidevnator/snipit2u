import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";

import { Header } from "../../components/Header";

function Privacy() {
  return (
    <Container>
      <Head>
        <title>Snipit2U - Privacy Policy!</title>
      </Head>
      <Header />
      <Box padding="10">
        <VStack spacing={4}>
          <Heading>Privacy Policy</Heading>
          <Text>Effective Date: March 5th, 2024</Text>

          <Heading size="md">Introduction</Heading>
          <Text>
            Snipit2u places a high priority on the privacy of its users. This
            Privacy Policy explains the types of information we collect when you
            use our redirect website, how we utilize that information, and with
            whom we may share it.
          </Text>

          <Heading size="md">Information We Collect</Heading>
          <Text>
            Analytics Data: We collect information about how users interact with
            our redirect website. This may include:
          </Text>
          <List pl={4} spacing={2}>
            <ListItem>IP addresses</ListItem>
            <ListItem>Device type and browser information</ListItem>
            <ListItem>Referring websites</ListItem>
            <ListItem>Pages visited on our site</ListItem>
            <ListItem>Time spent on our site</ListItem>
            <ListItem>
              Actions taken (such as clicks on redirect links)
            </ListItem>
          </List>

          <Heading size="md">How We Use Collected Information</Heading>
          <Text>
            We use the collected analytics data for the following purposes:
          </Text>
          <List pl={4} spacing={2}>
            <ListItem>
              Improving our website: We analyze user behavior to understand how
              our redirect website is used and to identify areas for
              improvement.
            </ListItem>
            <ListItem>
              Troubleshooting: Analytics data helps us diagnose and fix
              technical issues that may arise.
            </ListItem>
            <ListItem>
              Web traffic analysis: We track website traffic patterns to measure
              the effectiveness of our redirect services.
            </ListItem>
          </List>

          <Heading size="md">Information Sharing</Heading>
          <Text>
            We may share your information in the following circumstances:
          </Text>
          <List pl={4} spacing={2}>
            <ListItem>
              Analytics Providers: We use third-party analytics services (such
              as{" "}
              <Link href="https://policies.google.com/privacy" isExternal>
                Google Analytics
              </Link>
              ) to process and analyze our website data. These providers have
              their own privacy policies governing the use of your information.
            </ListItem>
            <ListItem>
              Legal Compliance: We may disclose your information if required by
              law, such as to comply with a court order, subpoena, or other
              legal process.
            </ListItem>
            <ListItem>
              Business Transfers: In the event of a merger, acquisition, or sale
              of our business, we may transfer your information to the new
              entity.
            </ListItem>
          </List>

          <Heading size="md">Data Security</Heading>
          <Text>
            We implement reasonable security measures to protect the collected
            data from unauthorized access, disclosure, alteration, or
            destruction. However, please be aware that no data transmission over
            the internet is completely secure.
          </Text>

          <Heading size="md">Your Data Rights</Heading>
          <Text>
            Depending on your location, you may have certain rights regarding
            your personal information. These rights may include:
          </Text>
          <List pl={4} spacing={2}>
            <ListItem>
              Right to access: You may have the right to request a copy of the
              information we collect about you.
            </ListItem>
            <ListItem>
              Right to rectification: You may have the right to update
              inaccurate information about you.
            </ListItem>
            <ListItem>
              Right to erasure: Under certain circumstances, you may have the
              right to request that we delete your information.
            </ListItem>
          </List>

          <Heading size="md">Changes to This Privacy Policy</Heading>
          <Text>
            We may update our Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will indicate any
            changes by updating the Effective Date at the top of this policy. We
            encourage you to review the Privacy Policy periodically for any
            updates.
          </Text>
        </VStack>
      </Box>
    </Container>
  );
}

export default Privacy;
