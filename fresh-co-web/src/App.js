import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";
import "./App.css";
import Feed from "./Pages/Feed";
import Details from "./Pages/Details";
import About from "./Pages/About";

function App() {
  return (
    <Router>
        <Fragment>
            <Routes>
                <Route exact path='/' element = {<Feed/>}/>
                <Route exact path='/Details' element = {<Details/>}/>
                <Route exact path='/About' element = {<About/>}/>
            </Routes>
        </Fragment>
    </Router>
);
}

export default App;
