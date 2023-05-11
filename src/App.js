import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/menu";
import "./App.css";

const Footer = () => {
  return <footer>© {new Date().getFullYear()} Deine Dokumentationsseite</footer>;
};

const Home = () => {
  return <h2>Willkommen zur Dokumentationsseite!</h2>;
};

const CasparCG = () => {
  return <h2>CasparCG Dokumentation</h2>;
};

const Lottie = () => {
  return <h2>Lottie Dokumentation</h2>;
};

const ThreeJS = () => {
  return <h2>Three.js Dokumentation</h2>;
};

function App() {
  return (
      <div className="App bg-amber-200">
        <Router>
          <Menu />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/casparcg" element={<CasparCG />} />
              <Route path="/lottie" element={<Lottie />} />
              <Route path="/threejs" element={<ThreeJS />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
