import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Stats from "../components/Stats"; // ⛔ temporarily removed
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <Stats />  ⛔ temporarily removed */}
      <Services />
      <Pricing />
      <Gallery />
      <Contact />
    </main>
  );
}
