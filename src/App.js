import React from "react";
import Footer from "./footer";
import "./index.css"; // Import CSS file for styling

function App() {
  return (
    <div className="App">
      <div className="background-logo"></div> {/* Background logo */}
      <header className="App-header">
        <h1>Globebug is coming soon!</h1>
      </header>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
}

export default App;
