import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TechStackGrid from "./pages/TechStackGrid";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-stack-grid" element={<TechStackGrid />} />
      </Routes>
    </BrowserRouter>
  );
}
