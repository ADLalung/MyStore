import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Cloud(){
    return (
        <Router>
        <div className="container m-5 p-5 rounded-full bg-white w-80 pointer-events-none blur-sm opacity-100 animate-cloud">
        </div>
        </Router>
    )
}