import React from 'react';
import HomePage from './home/HomePage';
import logo from './logo.svg';
import ProjectsPage from './projects/ProjectsPage';
import { Routes, Route, NavLink } from "react-router-dom"
import ProjectPage from './projects/ProjectPage';


function App() {
  return (
    <>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          <span className="icon-home"></span>
          Projects
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
