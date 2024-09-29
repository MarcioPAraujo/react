import React from "react"
import Product from "./Product"

function App() {
  const [data, setData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const urlBase = "https://ranekapi.origamid.dev/json/api/produto/"
  async function fetchNotebok(urlProduct) {
    const reponse = await fetch(urlProduct)
    const j = await reponse.json()
    return j
  }
  
  async function getData(Event) {
    setIsLoading(true)
    const productName = Event.target.innerText
    const urlProduct = urlBase + productName
    console.log(urlProduct)
    const product = await fetchNotebok(urlProduct)
    setData(product)
    setIsLoading(false)
  }
  

  return (
    <div className="App">
      <nav style={{display:'flex', gap:'1rem'}}>
        <button style={{flex:'1'}} onClick={getData}>notebook</button>
        <button style={{flex:'1'}} onClick={getData}>smartphone</button>
        <button style={{flex:'1'}} onClick={getData}>tablet</button>
      </nav>
      <div>
        {isLoading && <p>Loading ...</p>}
        {!isLoading && data && <Product nome={data.nome} preco={data.preco} foto={data.fotos}/>}
      </div>
    </div>
  );
}

export default App;
