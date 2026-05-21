import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import { Counts, About } from "./About";
import Features from "./Feature";
import Header from "./header";
import Home from "./Home";
import { Portfolio, Cta } from "./Portfolio";
import { Clients, Testimonials } from "./Myqualities";
import { ContactSection, Footer } from "./Contactme";
import MyBio from "./MyBio";

// ✅ Scroll helper for hash navigation
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router basename="/">
      <ScrollToHash />

      <Routes>
        {/* Redirect /index.html to / */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />

        {/* Home page route */}
        <Route
          path="/"
          element={
            <section id="center">
              <div>
                <Header />
                <Home />
                <About />
                <Cta />
                <Clients />
                <Features />
                <Portfolio />
                <Cta />
                <Counts />
                <Testimonials />
                <Cta />
                <ContactSection />
                <Footer />
              </div>
            </section>
          }
        />

        {/* MyBio page route */}
        <Route path="/MyBio" element={<MyBio />} />
      </Routes>
    </Router>
  );
}

export default App;
