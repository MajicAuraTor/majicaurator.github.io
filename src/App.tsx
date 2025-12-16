import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import PowerBIDemo from './pages/PowerBIDemo';
import ProjectPlan from './pages/ProjectPlan';
import Career from './pages/Career';
import Leadership from './pages/Leadership';
import Technology from './pages/Technology';
import Wellness from './pages/Wellness';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/powerbidemodemo" element={<PowerBIDemo />} />
            <Route path="/project-plan" element={<ProjectPlan />} />
            <Route path="/career" element={<Career />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/wellness" element={<Wellness />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;