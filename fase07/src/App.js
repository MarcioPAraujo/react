import React from "react"
import Product from "./Product"

const App = () => {
  const [currentProduct, setCurrentProduct] = React.useState(null)
  React.useEffect(() =>{
    const storageProduct = window.localStorage.getItem("product")
    if(storageProduct !== null){
      setCurrentProduct(storageProduct)
    }
  },[])
  
  React.useEffect(() =>{
    if(currentProduct !== null ){
      window.localStorage.setItem("product", currentProduct)
    }
  },[currentProduct])
  
  function getProduct (Event) {
    setCurrentProduct(Event.target.value)
  }
  return (
    <div className="App">
      <h1>product: {currentProduct}</h1>
      <button onClick={getProduct} value="notebook" >Notebook</button>
      <button onClick={getProduct} value="smartphone" >Smartphone</button>
      <Product product={currentProduct}/>
    </div>
  );
}

export default App;
