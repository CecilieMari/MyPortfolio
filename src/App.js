import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Aboutme from "./components/Aboutme/Aboutme";
import Vietnam from "./components/Photo/vietnamBilder";
import HøstTur from "./components/Photo/HøstTur";
import KontaktMeg from "./Kontakt/KontaktMeg";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Aboutme />} />
          <Route path="/Photo/vietnamBilder" element={<Vietnam />} />
          <Route path="/Photo/høstTur" element={<HøstTur />} />
          <Route path="/Kontakt" element={<KontaktMeg />} />
        </Routes> 
      </Layout>
    </Router>
  );
}

export default App;