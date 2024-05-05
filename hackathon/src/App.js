import React from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Define the route for the Card component */}
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
};

export default App;
