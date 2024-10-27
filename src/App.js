import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import RegisterEvent from "./components/RegisterEvent.jsx";
import ReportQuery from "./components/ReportQuery.jsx";
import Announcements from "./pages/Announcements.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/event" element={<RegisterEvent />} />
        <Route path="/report" element={<ReportQuery />} />
        <Route path="/announcements" element={<Announcements />} />
      </Routes>
    </Router>
  );
}

export default App;
