import logo from './logo.svg';
import './App.css';
import CarShop from './CarShop';
import Home from './Home';
import About from './About';
import MyProjects from './Projects';
import { Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<MyProjects/>}></Route>
      </Routes>
      {/* <CarShop></CarShop> */}
    </>
  );
}

export default App;
