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
    <div className="overflow-hidden  max-w-[100vw] bg-transparent  font-poppins">
      <div
        className="absolute top-0 right-0 left-0 bottom-0 h-[100dvh] w-screen -z-10"
        id="blob container"
      >
        <div
          className="min-h-[100dvh] max-h-[100dvh] min-w-screen max-w-full overflow-hidden w-full h-full relative -z-10 bg-transparent"
          id="blob_container_relative"
        >
          <canvas
            className="absolute bottom-[40%] -left-[150%]    lg:-left-1/2 lg:block lg:-bottom-1/4 lg:translate-x-1/2   -z-10"
            id="firstBlob"
          />

          <canvas
            className="absolute max-w-full bottom-1/4 scale-150 lg:scale-100 translate-y-1/2 right-1/4 translate-x-1/2 lg:translate-x-0 lg:translate-y-0   lg:-top-1/2   lg:left-[35%] -z-10"
            id="secondBlob"
          />
          <canvas
            className="absolute hidden  lg:-bottom-1/2 lg:-right-0  lg:block   -z-10"
            id="thirdBlob"
          />
        </div>
      </div>
      <BrowserRouter>
        <Header />
        <Sidebar asPage={false} />
        <div className="overflow-y-hidden  h-full w-full">
          <div className="px-1 lg:pr-10 lg:pl-96 pt-4 lg:pt-10 h-[100dvh]  w-full overflow-y-auto pb-36 lg:pb-20">
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Sidebar asPage={true} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
