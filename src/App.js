import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./assets/navbar"; // Include the Navbar component
import Footer from "./footer"; // Include the Footer component
import PrivacyPolicy from "./privacypolicy"; // Import Privacy Policy component
import "./index.css";

function App() {
  const MainContent = () => {
    const location = useLocation(); // Get the current route

    return (
      <div className="App">
        {/* Conditionally render the background logo */}
        {location.pathname !== "/privacypolicy" && (
          <div className="background-logo"></div>
        )}
        <Navbar /> {/* Add Navbar */}
        {/* Conditionally render the header */}
        {location.pathname === "/" && (
          <header className="App-header">
            <h1>Globebug is Coming Soon!</h1>
          </header>
        )}
        {/* Define Routes */}
        <Routes>
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          {/* Add other routes here if needed */}
        </Routes>
        <Footer /> {/* Add Footer */}
      </div>
    );
  };

  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
