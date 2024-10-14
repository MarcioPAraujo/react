import React, { useState, useEffect } from "react";
import UserForm_ShortVersion from "./UserForm_ShortVersion";
import "./App.css"; // Import the CSS file

function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="App">
      <div className="watch">time: {currentTime}</div>
      <UserForm_ShortVersion />
    </div>
  );
}

export default App;