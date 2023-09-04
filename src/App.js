import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import MyBatch from "./components/MyBatch/MyBatch";
import Eform from "./components/E-library/E-Form";
import BookList from "./components/E-library/BookList";





const App = () => {
  return (
    <div>
     
     
      <Routes>
        <Route path="/" element={<Homepage />} >
          <Route path="/mybatch" element={<MyBatch />}/>
          <Route path="E-library" element={<Eform />} />
          <Route path="book" element={<BookList />} />
         
        
         
        </Route>
      </Routes>
    </div>
  );
};

export default App;
