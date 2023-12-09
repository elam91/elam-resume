import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Skills from "./pages/Skills";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="w-full bg-gray-100 h-full min-h-screen font-poppins  bg-cover bg-center lg:bg-left  bg-no-repeat bg-[url('background/blobs.svg')]">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <div className="px-1 lg:pr-10 lg:pl-96 pt-10 h-full min-h-full">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
