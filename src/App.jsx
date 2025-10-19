import React from "react";
import "./App.css";
import imgRestaurante from "./assets/hashtaurante.webp";
import Categorias from "./components/Categorias.jsx";
import Card from "./components/Card.jsx";

function App() {

  return (

    <div className="container">

      <div className="banner">
        
        <img src={imgRestaurante} alt="banner restaurante"></img>

      </div> 

      <Categorias/>

      <div className="cards">

        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
          
      </div>

      
    </div>

 );
}

export default App;

//  rfce 

