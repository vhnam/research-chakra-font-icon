import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import BoxiconsPage from "./pages/Boxicons";
import FontAwesomePage from "./pages/FontAwesome";

const App = () => {
  return (  
    <>
      <NavBar />
      <Routes>
        <Route path="boxicons" element={<BoxiconsPage />} />
        <Route path="font-awesome" element={<FontAwesomePage />} />
      </Routes>
    </>
  );
};

export default App;
