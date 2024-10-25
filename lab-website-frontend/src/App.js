import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Research from './components/Research';
import Tool from './components/Tool';
import Team from './components/Team'; 
import Footer from './components/Footer'; // 添加 Team 组件的导入

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/tools" element={<Tool />} />
          <Route path="/team" element={<Team />} /> {/* 添加 Team 路由 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;