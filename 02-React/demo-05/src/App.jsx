import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import About from './About';
import NotFound from './NotFound';
import Signup from './Signup';


function App() {

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile/razan">Profile</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="profile/:username" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
