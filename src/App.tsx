import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Skills from "./pages/Skills";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-size-[400px] scrollbar-hide scroll max-w-[100vw] animate-bg-scroll justify-start gap-4 overflow-hidden bg-white bg-[url(./assets/background.jpg)] bg-[length:400px_200px] bg-center bg-repeat font-poppins prose-p:text-black">
      <BrowserRouter>
        <Header />
        <Sidebar asPage={false} />
        <div className="h-full w-full overflow-y-hidden bg-yellow-50/20 md:w-11/12 2xl:w-10/12">
          <div className="scrollbar-hide h-[100dvh] w-full overflow-y-auto px-1 pb-36 pt-4 lg:pb-20 lg:pl-[400px] lg:pr-10 lg:pt-10">
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <div className="invisible bottom-1 left-1 z-10 md:visible md:absolute">
        <a
          target="_blank"
          className="bg-white/40 text-xs text-blue-900 underline"
          href="https://www.pexels.com/photo/photo-of-leaves-1382393/"
        >
          Background Photo by Madison Inouye
        </a>
      </div>
    </div>
  );
}

export default App;
