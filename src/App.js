import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CharCounter from "./pages/CharCounter/CharCounter";
import EpisodeLocations from "./pages/EpisodeLocations/EpisodeLocations";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charCounter" element={<CharCounter />} />
          <Route path="/episodeLocations" element={<EpisodeLocations />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
