import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Decoded from "./pages/Decoded";
import PlathEsther from "./pages/PlathEsther";
import About from "./pages/About";
import WorksCited from "./pages/WorksCited";
import Support from "./pages/Support";

function AnimatedRoutes() {
  const location = useLocation();
  const reduced = useReducedMotion();

  const routes = (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/decoded" element={<Decoded />} />
      <Route path="/plath-esther" element={<PlathEsther />} />
      <Route path="/about" element={<About />} />
      <Route path="/works-cited" element={<WorksCited />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );

  if (reduced) return routes;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
      >
        {routes}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </HashRouter>
  );
}
