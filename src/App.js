import logo from './logo.svg';
import './App.css';
import CarShop from './CarShop';
import Home from './Home';
import About from './About';
import MyProjects from './Projects';
import { Route, Link } from "react-router-dom";

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
      <Home></Home>
      <About></About>
      <MyProjects/>
      {/* <CarShop></CarShop> */}
    </>
  );
}

export default App;
