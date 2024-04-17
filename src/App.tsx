import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollablePage from './pages/ScrollablePage'; // Your About page

const App = () => {
  //const isMobile = window.innerWidth < 768;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrollablePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
