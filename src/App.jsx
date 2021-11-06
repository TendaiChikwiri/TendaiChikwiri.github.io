import {
  ChakraProvider,
  extendTheme,
  ColorModeScript,
  Container,
} from "@chakra-ui/react";
import "@fontsource/nunito";
import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Particles from "./components/Particles";

const theme = extendTheme({
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
});

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colorTheme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeScript initialColorMode={colorTheme.config.initialColorMode} /> */}
      <Particles />
      <Container maxWidth="container.md" sx={{ position: "relative" }}>
        <Navbar />
        <Hero />
        <Portfolio />
        <Contact />
      </Container>
    </ChakraProvider>
  );
}

export default App;
