import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBeerPage from "./pages/AddBeerPage";
import AllBeersPage from "./pages/AllBeersPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import HomePage from "./pages/HomePage.jsx";
import RandomBeePage from "./pages/RandomBeerPage.jsx"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} /> 
        <Route path="/random-beer" element={<RandomBeePage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
