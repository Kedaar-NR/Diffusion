import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Terminal } from './components/Terminal';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="scanline" />
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Terminal />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
