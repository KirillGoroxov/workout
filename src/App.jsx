import { Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Home from "./pages/Home/Home";
import ExerciseDetail from "./pages/ExerciseDetail/ExerciseDetail";

function App() {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </>
  );
}

export default App;
