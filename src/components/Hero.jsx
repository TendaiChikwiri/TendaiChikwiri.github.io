import { Box, Heading, Text } from "@chakra-ui/react";


const Hero = () => {
  return (
    <Box>
      <Heading as="h1" size="2xl" maxWidth="20ch" mt="10">
        Front-end Web Developer
      </Heading>
      <Text maxWidth="40ch" mt="10" fontSize="xl">
        Highly skilled and passionate self-taught front-end web developer. I
        design and develop websites and apps with custom graphics, photos,
        videos and animations.
      </Text>
    </Box>
  );
};

export default Hero;
