// componente nomeado PacalCase

import React, {useState} from 'react';

const Categorias = () => {

const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0);

  return (
    <div className="categorias">

        <p className={"categoria " + (numCategoriaSelecionada === 0 ? "categoria--selecionada" : "")} onClick={() => setNumCategoriaSelecionada(0)}>Pratos Principais </p>
        <p className={"categoria " + (numCategoriaSelecionada === 1 ? "categoria--selecionada" : "")} onClick={() => setNumCategoriaSelecionada(1)}>Sobremesas</p>
        <p className={"categoria " + (numCategoriaSelecionada === 2 ? "categoria--selecionada" : "")} onClick={() => setNumCategoriaSelecionada(2)}>Bebidas</p>
           
    </div>

  )
}

export default Categorias

//rafce -> troca o function por ArrowFunction ()
// operador ternario if else
// componente nomeado PacalCase

// const Categorias = () => {

//   const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0); // [variavel, func. atera variavel de estado]
//   // react -> variáveis de estado - hook
//   //  setNumCategoriaSelecionada = (1)

//   return (
//     <div className="categorias">

//         <p className="categoria categoria--selecionada">Pratos Principais </p>
//         <p className="categoria">Sobremesas</p>
//         <p className="categoria">Bebidas</p>

//     </div>

//   )
// }

// export default Categorias

// //rafce -> troca o function por ArrowFunction ()