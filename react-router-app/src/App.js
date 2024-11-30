import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Immortality from './components/Immortality';
import OldTortoise from './components/OldTortoise';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Immortality" element={<Immortality />} />
          <Route path="/OldTortoise" element={<OldTortoise />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
