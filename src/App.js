import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import MyBatch from "./components/MyBatch";

const App = () => {
  return (
    <div>
     
     
      <Routes>
        <Route path="/" element={<Homepage />} >
          <Route path="/mybatch" element={<MyBatch/>}/>
          <Route/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
