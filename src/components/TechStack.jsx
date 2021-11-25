import { Box, Heading, Text, Image, VStack, HStack } from "@chakra-ui/react";
import styled from "@emotion/styled";

let IconImage = styled(Image)`
  object-fit: contain;
  height: 2rem;
  width: auto;
`;

const TechStack = () => {
  return (
    <Box>
      <Heading align="center">
        Tech Stack
        <Text fontSize="md" fontWeight="light">
          Technologies I'm familiar with
        </Text>
      </Heading>
      <VStack>
        <Heading size="md">Front-end</Heading>
        <HStack spacing="4">
          <IconImage src="./images/sass.svg" />
          <IconImage src="./images/chakra.svg" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default TechStack;
