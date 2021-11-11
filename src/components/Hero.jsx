import { Box, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box>
      <Heading as="h1" size="2xl" maxWidth="20ch" mt="10">
        Tendai Chikwiri
        <Text fontWeight="light" fontSize="lg">
          Front-end Web Developer
        </Text>
      </Heading>

      <Text maxWidth="40ch" mt="10" fontSize="xl">
        Highly motivated web developer committed to pursuing a long-term career
        change in front-end web development. I primarily use Javascript and
        Python but picking up a new language or framework isn't a problem for
        me.
      </Text>
    </Box>
  );
};

export default Hero;
