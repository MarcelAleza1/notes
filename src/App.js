import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Navbar } from "./components/common/Navbar";
import { DataToShow } from "./components/DataToShow";
import Login from "./components/common/Login";
import SignUp from "./components/common/SignUp";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Landing />} />
          <Route path="landing" element={<Landing />} />
          <Route path="data" element={<DataToShow />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
