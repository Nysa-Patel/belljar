import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Decoded from "./pages/Decoded";
import PlathEsther from "./pages/PlathEsther";
import About from "./pages/About";
import WorksCited from "./pages/WorksCited";
import Support from "./pages/Support";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decoded" element={<Decoded />} />
        <Route path="/plath-esther" element={<PlathEsther />} />
        <Route path="/about" element={<About />} />
        <Route path="/works-cited" element={<WorksCited />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </HashRouter>
  );
}
