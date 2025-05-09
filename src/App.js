import logo from './logo.svg';
import './App.css';
import CarShop from './CarShop';
import Home from './Home';
import About from './About';
import MyProjects from './Projects';
import { Route, Link, Routes } from "react-router-dom";
import Project from './Project';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/aboutguitar">About Guitar</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/project/python">project python</Link></li>
          <li><Link to="/project/js">project js</Link></li>
          <li><Link to="/project/react">project react</Link></li>
          <li><Link to="/carshop">Car shop</Link></li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About hobby="music"/>}></Route>
        <Route path="/aboutguitar" element={<About hobby="guitar"/>}></Route>
        
        <Route path="/carshop" element={<CarShop/>}></Route>
        <Route path="/projects" element={<MyProjects/>}></Route>
        <Route path='/project/:name' element={<Project/>}></Route>
      </Routes>
      {/* <CarShop></CarShop> */}
    </>
  );
}

export default App;
