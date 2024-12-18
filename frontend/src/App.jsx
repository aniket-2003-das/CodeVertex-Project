import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import {Home} from './pages/Home';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import PythonTutorial from './pages/pythonTutorial';
import Internship from './pages/Internship';
import Tutorials from './pages/Tutorials';
import Courses from './pages/Courses';
import RoadmapPage from './pages/Roadmap';
import Loader from './components/PreLoader/Loader';
import OOPJavaTutorial from './pages/oopsTutorial'
import HTMLFundamentals from './pages/htmlTutorial'
import DSACppTutorial from './pages/dsaTutorial'
import JavaTutorial from './pages/javaTutorial'
import JavaScriptTutorial from './pages/javascript'
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
          <Route path="/pythontutorial" element={<PythonTutorial />} />
          <Route path="/oopsJava" element={<OOPJavaTutorial />} />
          <Route path = "/html" element = {<HTMLFundamentals/>} />
          <Route path= '/dsa' element={<DSACppTutorial/>}/>
          <Route path = '/java' element ={<JavaTutorial/>}/>
          <Route path = '/javascript'element = {<JavaScriptTutorial/>}/>
          <Route path="/roadmap" element={<RoadmapPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
