import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import AddContact from './components/AddContact/AddContact';
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <Routes>
      <Route path={'/addContact'} element={AddContact()}/>
    </Routes>
  </React.Fragment>
  );
}

export default App;
