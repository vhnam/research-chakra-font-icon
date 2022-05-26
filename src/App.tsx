import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import BoxiconsPage from "./pages/Boxicons";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="boxicons" element={<BoxiconsPage />} />
      </Routes>
    </>
  );
};

export default App;
