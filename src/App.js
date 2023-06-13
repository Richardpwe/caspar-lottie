import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Copyright from "./components/copyright";
import Home from "./pages/home";
import "./App.css";

import CasparCG from "./pages/casparcg";
import Lottie from "./pages/lottie";
import AfterEffects from "./pages/aftereffects";
import ThreeJS from "./pages/threejs";


function App() {
  return (
      <div className="container mx-auto">
        <Router>
          <Menu />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/casparcg" element={<CasparCG />} />
              <Route path="/lottie" element={<Lottie />} />
              <Route path="/aftereffects" element={<AfterEffects />} />
              <Route path="/threejs" element={<ThreeJS />} />
            </Routes>
          </main>
          <Footer />
          <Copyright/>
        </Router>
      </div>
  );
}

export default App;
