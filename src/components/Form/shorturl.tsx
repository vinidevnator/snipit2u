import {
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Alert,
  Icon,
  Stack,
  Code,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { MdCloudDone } from "react-icons/md";

import { IFormShortUrl } from "./interface";
import { useState } from "react";

export function ShortUrlForm() {
  const [shortedUrl, setShortedUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
      touchedFields,
      isSubmitSuccessful,
      isSubmitting,
    },
  } = useForm<IFormShortUrl>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { url: "" },
  });

  async function onSubmit(data: IFormShortUrl) {
    const response = await fetch("/api/shortlink/register", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(async (response) => await response.json());

    setShortedUrl(window.location.origin + "/?c=" + response.shortUrl);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!isValid && Object.values(touchedFields).length > 0}
      >
        {isSubmitSuccessful && (
          <Alert status="success" variant="solid">
            <Flex direction="column">
              <Flex align="center" textAlign="center">
                <Icon as={MdCloudDone} mr="2" />
                <p>The link was been saved! Copy and share!</p>
              </Flex>
              <Flex>
                <Code> {shortedUrl} </Code>
              </Flex>
            </Flex>
          </Alert>
        )}

        <Flex flexDirection="column">
          <FormLabel htmlFor="url" color="red.400">
            Short your URL and get a short link
          </FormLabel>

          <Input
            placeholder="Copy and paste your link to short..."
            {...register("url", {
              required: { message: "Required field", value: true },
            })}
          />

          <FormErrorMessage>
            {errors.url?.type === "required" && (
              <span>{errors.url?.message}</span>
            )}
          </FormErrorMessage>
        </Flex>

        <Flex mt="4">
          <Button
            color="red.400"
            type="submit"
            variant="link"
            isLoading={isSubmitting}
            loadingText="Submitting..."
          >
            Shorten!
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
}
