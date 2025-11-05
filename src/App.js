import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Aboutme from "./components/Aboutme/Aboutme";
import Vietnam from "./components/Photo/Vietnam";
import HøstTur from "./components/Photo/HøstTur";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Aboutme />} />
          <Route path="/Photo/Vietnam" element={<Vietnam />} />
          <Route path="/Photo/HostTur" element={<HøstTur />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;