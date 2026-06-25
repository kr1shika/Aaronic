// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="min-h-screen">
//       <Home />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Australia from "./pages/Australia";
import Canada from "./pages/Canada";
import Home from "./pages/Home";
import Services from "./pages/Services";
import StudyAbroad from "./pages/StudyAbroad";
import UK from "./pages/UK";
// import Services from "./pages/Services";
// import TestPreparation from "./pages/TestPreparation";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/study-abroad"
          element={<StudyAbroad />}
        />

        <Route
          path="/study-abroad/australia"
          element={<Australia />}
        />

        <Route
          path="/study-abroad/canada"
          element={<Canada />}
        />

        <Route
          path="/study-abroad/uk"
          element={<UK />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/services"
          element={<Services />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;