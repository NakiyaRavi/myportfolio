import { Route, Routes } from 'react-router-dom';
import NotFound from './sections/NotFound';
import PortfolioLayout from './PortfolioLayout';

function App() {

  return (
    <main className="font-sans selection:bg-dusty selection:text-cream bg-cream text-dark min-h-screen">
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
