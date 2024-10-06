import React from 'react'
import { Context} from './GlobalCotext'


function Products() {

    const{ product, clearData }= React.useContext(Context);
    
    if(product === null) return null
  return (
    <div>
        <button onClick={clearData}>limpar</button>
        <h1>Products:</h1>
        <ul>
            {product.map((item) => (
                <li key={item.id}>
                    <p>Nome: {item.nome}</p>
                    <p>Descrição: {item.descricao}</p>
                    <img src={item.fotos[0].src} alt={item.name}/>
                    <p>Preço: R$ {Number(item.preco).toFixed(2)}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Products