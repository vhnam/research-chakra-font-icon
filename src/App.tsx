import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { PageLoader } from "./components/Loader";
import NavBar from "./components/NavBar";

const BoxiconsPage = lazy(() => import("./pages/Boxicons"));
const FontAwesomePage = lazy(() => import("./pages/FontAwesome"));

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="boxicons" element={<BoxiconsPage />} />
          <Route path="font-awesome" element={<FontAwesomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
