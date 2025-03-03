import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recomendation from "../components/body/Pokemon";
import Profile from "../components/body/Infographic";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Recomendation />} />
        <Route path="/Newpokemon/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}