import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import AddContact from './components/Contacts/AddContact/AddContact';
import './components/Contacts/ListContact/ListContact';
import ListContact from './components/Contacts/ListContact/ListContact';
import EditContact from './components/Contacts/EditContact/EditContact';


function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <Routes>
      <Route path={'/'} element={<Navigate to={'./Contacts/ListContact'}/>} />
      <Route path={'/Contacts/ListContact'} element={ListContact()}/>
      <Route path={'/Contacts/AddContact'} element={AddContact()}/>
      <Route path={'Contacts/EditContact/:contatoId'} element={EditContact()}/>
    </Routes>
  </React.Fragment>
  );
}

export default App;
