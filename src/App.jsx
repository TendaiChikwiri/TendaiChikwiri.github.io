import { ChakraProvider, extendTheme, Container } from "@chakra-ui/react";
import "@fontsource/nunito";
import "./App.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Particles from "./components/Particles";
import Footer from "./components/Footer";
// import TechStack from "./components/TechStack";

const fontTheme = extendTheme({
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
});

function App() {
  return (
    <ChakraProvider theme={fontTheme}>
      <Particles />
      <Container maxWidth="container.md" sx={{ position: "relative" }}>
        <Navbar />
        <Hero />
        <Portfolio />
        {/* <TechStack /> */}
        <Contact />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
