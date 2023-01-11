import {
  Flex,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { IFormShortUrl } from "./interface";

export function ShortUrlForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = useForm<IFormShortUrl>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: { url: "" },
  });

  function onSubmit(data: IFormShortUrl) {
    fetch("/api/shortlink/register", {
      method: "POST",
      body: JSON.stringify(data)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!isValid && Object.values(touchedFields).length > 0}
      >
        <Flex flexDirection="column">
          <FormLabel htmlFor="url">
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

        <Flex mt="1">
          <Button type="submit">Shorten!</Button>
        </Flex>
      </FormControl>
    </form>
  );
}
