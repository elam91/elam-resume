import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Skills from "./pages/Skills";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import DrawBlob from "blob-animated";
import { useEffect, useRef } from "react";

function App() {
  useEffect(() => {
    const firstBlob = new DrawBlob({
      canvas: document.getElementById("firstBlob"),
      speed: 400,
      scramble: 0.12,

      colorFunction: (ctx) => {
        const grd = ctx.createLinearGradient(150, 10, 0, 220);
        grd.addColorStop(0, "#ce9eff");
        grd.addColorStop(1, "#8F00FF");
        return grd;
      },
    });

    const secondBlob = new DrawBlob({
      canvas: document.getElementById("secondBlob"),
      speed: 380,
      scramble: 0.15,

      colorFunction: (ctx) => {
        const grd = ctx.createLinearGradient(200, 15, 0, 220);
        grd.addColorStop(0, "#ce9eff");
        grd.addColorStop(1, "#8F00FF");
        return grd;
      },
    });

    const thirdBlob = new DrawBlob({
      canvas: document.getElementById("thirdBlob"),
      speed: 380,
      scramble: 0.08,

      colorFunction: (ctx) => {
        const grd = ctx.createLinearGradient(550, 2, 0, 220);
        grd.addColorStop(1, "#ce9eff");
        grd.addColorStop(0, "#8F00FF");
        return grd;
      },
    });
  }, []);

  return (
    <div className="w-full overflow-hidden  bg-transparent  font-poppins  bg-cover bg-center lg:bg-left  ">
      <canvas
        className="absolute hidden -left-1/2 lg:block -bottom-1/4 translate-x-1/2 -z-10"
        id="firstBlob"
      />

      <canvas
        className="absolute  bottom-1/4 scale-125 lg:scale-100 translate-y-1/2 right-1/4 translate-x-1/2 lg:translate-x-0 lg:translate-y-0   lg:-top-1/2   lg:left-[35%] -z-10"
        id="secondBlob"
      />
      <canvas
        className="absolute hidden  lg:-bottom-1/2 lg:-right-0  lg:block   -z-10"
        id="thirdBlob"
      />
      <BrowserRouter>
        <Header />
        <Sidebar />
        <div className="overflow-y-hidden  h-full w-full">
          <div className="px-1 lg:pr-10 lg:pl-96 pt-10 h-screen  w-full overflow-y-auto pb-32 lg:pb-20">
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
