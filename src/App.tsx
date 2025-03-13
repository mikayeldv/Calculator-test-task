import "./App.css";
import Dashboard from "./components/Dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Results from "./components/Results";
import Finalize from "./components/Finalize";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/results/:id" element={<Results />} />
        <Route path="/finalize/:id" element={<Finalize />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
