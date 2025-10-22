import Card from "./Card.jsx";
import {pratosPrincipais, sobremesas, bebidas} from "../assets/cardapio.js";
import categorias from "./Categorias.jsx";

const Cards = () => {

    const itensCategoria = [pratosPrincipais, sobremesas, bebidas];
    const categoriaSelecionada = itensCategoria[setNumCategoriaSelecionada];

    // metodo .map() gera uma nova lista exatamente do tamanho da lista inicial. faz uma acão especifica para cada elemento da lista inicial.



  return (
    
    <div className="cards">

        {categoriaSelecionada.map((item) =>    
        
        (<Card 
            titulo={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
        />
         
    ))}


                 
    </div>

  );
};

export default Cards