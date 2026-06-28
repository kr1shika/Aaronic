import { BrowserRouter, Route, Routes } from "react-router-dom";

import Australia from "./pages/Australia";
import Canada from "./pages/Canada";
import China from "./pages/China";
import Home from "./pages/Home";
import StudyAbroad from "./pages/StudyAbroad";
import UK from "./pages/UK";
import USA from "./pages/USA";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/study-abroad/australia" element={<Australia />} />
        <Route path="/study-abroad/canada" element={<Canada />} />
        <Route path="/study-abroad/uk" element={<UK />} />
        <Route path="/study-abroad/usa" element={<USA />} />
        <Route path="/study-abroad/china" element={<China />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;