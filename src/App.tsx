import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from 'pages';
import Resume from 'pages/resume';
import Navbar from 'components/Navbar';

const App = () => {
  return (
    <div className="pt-6 px-4 md:px-10 lg:px-30 xl:px-40">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/resume"
            element={<Resume className="mb-16" />}
          />
          <Route
            path="/"
            element={<Home className="mb-16" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
