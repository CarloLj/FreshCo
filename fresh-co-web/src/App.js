import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import "./App.css";
import Feed from "./Pages/Feed";
import Details from "./Pages/Details";



function App() {
  return (
    <Router>
        <Fragment>
            <Routes>
                <Route exact path='/Feed' element = {<Feed/>}/>
                <Route exact path='/Details' element = {<Details/>}/>
            </Routes>
        </Fragment>
    </Router>
);
}

export default App;
