import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import {Home} from './pages/Home';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Internship from './pages/Internship';
import Tutorials from './pages/Tutorials';
import Courses from './pages/Courses';
import Loader from './components/PreLoader/Loader';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
