import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MyResume from "../components/MyResume";
import Myservices from "../components/MyServices";
import MyWork from "../components/MyWork";
import Testimonials from "../components/Testimonials";

export default function index() {
  return (
    <main>
      <Hero />
      <About />
      <Myservices />
      <MyResume />
      <MyWork />
      <Testimonials />
      <ContactMe />
      <Footer />
    </main>
  );
}
