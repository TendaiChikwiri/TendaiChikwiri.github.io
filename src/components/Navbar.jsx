import React from "react";
import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import NavMenu from "./NavMenu";
// import Toggle from "./Toggle";

const Navbar = () => {
  return (
    <Box>
      <Container maxWidth="container.md" p="0" py="5">
        <Flex alignItems="center">
          <Spacer />
          <Box>
            {/* <Toggle /> */}
            <NavMenu />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
