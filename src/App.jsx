import React, { Suspense, useEffect, useState } from "react";
import "./style.scss";

import GoTop from "./components/GoTop";
import Particles from "./components/Particles";
import Header from "./components/Header";
import Home from "./components/Home";

const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Stack = React.lazy(() => import("./components/Stack"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      <GoTop isVisible={isVisible} scrollToTop={scrollToTop} />
      <Particles />
      <main>
        <Header />
        <Home />
        <Suspense fallback={<div>Loading...</div>}>
          <Portfolio />
          <Stack />
          <Contact />
        </Suspense>



      </main>
    </>
  );
}

export default App;
