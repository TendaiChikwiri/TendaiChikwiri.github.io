import { Box, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box>
      <Heading as="h1" size="2xl" maxWidth="20ch" mt="10">
        Front-end Web Developer
      </Heading>
      <Text maxWidth="40ch" mt="10" fontSize="xl">
        Highly skilled and passionate front-end web developer. I develop modern,
        user-friendly, accessible and responsive websites
      </Text>
    </Box>
  );
};

export default Hero;
