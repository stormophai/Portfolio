import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { useLenis } from './lib/useLenis';
import './App.css';

function App() {
  useLenis();

  return (
    <Router>
      <ScrollProgressBar />
      <div className="bg-background text-primary font-sans antialiased min-h-screen">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
