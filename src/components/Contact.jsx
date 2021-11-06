import { useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  // FormErrorMessage,
  FormHelperText,
  Button,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react";

import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_icgqxbi",
        "template_292u4qf",
        e.target,
        "user_lI28qhPEI0btO6DeryoO2"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent, I will get back to you shortly");
          let resetForm = document.getElementById("contact-form");
          resetForm.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          console.log("FAILED...", error);
          alert(
            "Unfortunely message not sent. Alternatively please send an email"
          );
          let resetForm = document.getElementById("contact-form");
          resetForm.reset();
          setLoading(false);
        }
      );
  };
  return (
    <Box id="Contact" my="28">
      <SimpleGrid minChildWidth="300px" spacing="0.5rem">
        <Flex
          direction="column"
          justify="flex-start"
          p="4"
          sx={{ borderRadius: "10px" }}
        >
          <Heading mt="10">Contact Me</Heading>
          <Text>Feel free to reach out</Text>
          <Heading mt="4">Tendai Chikwiri</Heading>
          <Link
            textDecoration="underline"
            href="mailto:tfchikwiri@gmail.com"
            isExternal
          >
            tfchikwiri@gmail.com
          </Link>
          <Link
            mt="2"
            href="https://drive.google.com/file/d/1ZIaleTFjS6BEpW7qpnc9Sj7f6eahbu_F/view?usp=sharing"
            textDecoration="underline"
            isExternal
          >
            CV
          </Link>
        </Flex>
        <Box
          p="4"
          border="1px"
          borderColor="#0000001a"
          borderRadius="md"
          boxShadow="xl"
        >
          <form id="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <FormControl isRequired mb="2">
              <FormLabel
                htmlFor="user_name"
                fontWeight="semibold"
                fontSize="lg"
              >
                Name
              </FormLabel>
              <Input
                id="user_name"
                name="user_name"
                bg="white"
                color="black"
                placeholder="Name"
              />
            </FormControl>
            <FormControl isRequired mb="2">
              <FormLabel htmlFor="email" fontWeight="semibold" fontSize="lg">
                Email address
              </FormLabel>
              <Input
                id="email"
                type="email"
                name="user_email"
                bg="white"
                placeholder="Email"
              />
            </FormControl>
            <FormControl isRequired mb="2">
              <FormLabel htmlFor="message" fontWeight="semibold" fontSize="lg">
                Message
              </FormLabel>
              <Textarea id="message" name="message" bg="white" />
              <FormHelperText>
                I&apos;d like to hear your thoughts
              </FormHelperText>
            </FormControl>
            <Button
              id="submit-btn"
              type="submit"
              value="Send"
              // colorScheme="teal"
              variant="outline"
              my="4"
              disabled={loading}
              isLoading={loading}
              loadingText="Sending..."
            >
              Send
            </Button>
          </form>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Contact;
