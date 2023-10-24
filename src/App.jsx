// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Authentication } from './pages/authentication/index'
import { ExpenseTracker } from './pages/expense-tracker/index'

function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path="/" exact element={<Authentication />} />
        <Route path="/expense-tracker" element ={<ExpenseTracker />} />
      </Routes>
    </Router>
  </div>;
}


export default App
