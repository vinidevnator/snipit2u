import {
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Alert,
  Icon,
  Code,
  useToast,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { MdCloudDone, MdCopyAll } from "react-icons/md";

import { IFormShortUrl } from "./interface";
import { useState } from "react";

export function ShortUrlForm() {
  const [shortedUrl, setShortedUrl] = useState("");
  const toast = useToast();

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
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: { url: "" },
  });

  async function onSubmit(data: IFormShortUrl) {
    const response = await fetch("/api/shortlink/register", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(async (response) => await response.json());

    setShortedUrl(window.location.origin + "/c/" + response.shortUrl);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!isValid && Object.values(touchedFields).length > 0}
      >
        {isSubmitSuccessful && (
          <Alert
            status="success"
            variant="solid"
            flexDirection="column"
            alignItems="left"
            justifyContent="center"
            mb="2"
          >
            <Flex align="center">
              <Icon as={MdCloudDone} mr="2" />
              <p>The link was been saved! Copy and share!</p>
            </Flex>
            <Flex align="center">
              <Code> {shortedUrl} </Code>
              <Button
                ml={1}
                sx={{
                  _hover: {
                    backgroundColor: "red",
                  },
                }}
                onClick={() => {
                  navigator.clipboard.writeText(shortedUrl);
                  toast({
                    title: "Copied to clipboard!",
                    status: "success",
                    isClosable: true,
                  });
                }}
                variant="ghost"
              >
                <Icon as={MdCopyAll} />
              </Button>
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
              pattern: {
                value:
                  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(([0-9]{1,5})?\/.*)?$/,
                message: "Provide a valid url",
              },
            })}
          />

          {errors.url && errors.url.message && (
            <FormErrorMessage>
              <span>{errors.url?.message}</span>
            </FormErrorMessage>
          )}
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
