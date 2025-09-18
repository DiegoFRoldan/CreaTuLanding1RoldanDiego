import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './style/App.css';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a ArteEnPizza! Calidad artesanal premium." />
    </>
  );
};
export default App;

