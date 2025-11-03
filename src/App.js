import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Aboutme from "./components/Aboutme/Aboutme";
import Photo from "./components/Photo/Photo";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Aboutme />} />
          <Route path="/Photo" element={<Photo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;