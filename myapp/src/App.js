import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Bike from "./components/Bike.js"
import Swim from "./components/Swim.js"
import Run from "./components/Run.js"
import Weighttraining from "./components/Weighttraining.js"
import Home from "./components/Home.js"

function App() {
  return (
    <BrowserRouter >
      <Navbar
        
      />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Bike" element={<Bike/>} />
        <Route
          path="/Swim" element={<Swim/>}
        />
        <Route
          path="/Run" element={<Run />}
        />
          <Route
          path="/WeightTraining" element={<Weighttraining/>}
        />


  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
