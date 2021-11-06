import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Link,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ProjectsData from "../ProjectsData";
const GitHub = "./images/github.svg";

const Portfolio = () => {
  return (
    <Box py="20" id="Portfolio">
      <Heading pt="8">Portfolio</Heading>
      <Flex direction="column" sx={{ gap: "1rem" }}>
        {ProjectsData.map((project, index) => (
          <Flex
            direction="column"
            justify="space-between"
            key={index}
            py="6"
            borderRadius="md"
          >
            <Heading size="md">{project.name}</Heading>
            <Text>{project.description}</Text>
            <Flex className="technologies" my="4">
              {project.technologies.map((technology, index) => (
                <Box
                  key={index}
                  borderRadius="xl"
                  border="1px"
                  borderColor="#ccd0d5"
                  p="1"
                  m="1"
                  disabled
                  fontSize="small"
                >
                  {technology}
                </Box>
              ))}
            </Flex>
            <Flex className="link" justify="flex-start">
              <Tooltip label="Repository">
                <Link href={project.links[0]} isExternal>
                  <Image boxSize="1.5rem" mx="2" src={GitHub} alt="GitHub" />
                </Link>
              </Tooltip>
              <Tooltip label="Live Site">
                <Link href={project.links[1]} isExternal alt="External Link">
                  <ExternalLinkIcon mx="2" fontSize="1.5rem" />
                </Link>
              </Tooltip>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Box align="center" my="4">
        <Tooltip label="Github Profile">
          <Button variant="outline">
            <a href="https://github.com/TendaiChikwiri?tab=repositories">
              See More on GitHub
            </a>
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Portfolio;
