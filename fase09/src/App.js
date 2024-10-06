import React from "react";
import Products from "./Products";
import { GlobalContext } from "./GlobalCotext";

function App() {
  return (
    <div className="App">
      <GlobalContext>
        <Products />
      </GlobalContext>
    </div>
  );
}

export default App;
