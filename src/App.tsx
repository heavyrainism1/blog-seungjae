import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Series from './pages/Series';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />
        <main className="flex-1 w-full relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/series" element={<Series />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
