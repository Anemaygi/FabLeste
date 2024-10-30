import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Services />
      <ScrollToTop />
    </>
  );
}

export default App;
