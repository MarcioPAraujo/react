function App() {
  const products = [ 
    {id:1, description:"laptop", price:"R$ 4600", colors:["#ffabce","#abcdef","#123456"]},
    {id:2, description:"Purse", price:"R$ 1000", colors:["#a1b2c3","#f5d6b8","#9f6ab1"]},
    {id:3, description:"Mirror", price:"R$ 500", colors:["#34fa56","#cde34a","#354fdc"]},
    {id:4, description:"Couch", price:"R$ 6000", colors:["#f98765","#afec67","#bcde45"]},
    {id:5, description:"Phone", price:"R$ 5000", colors:["#867466","#238653","#465282"]},
    {id:6, description:"Micro-waves", price:"R$ 800", colors:["#cbfead","dbcfea","#321bcd"]},
   ]

   let prices = products.map((item)=> Number(item.price.replace("R$ ","")))

   
   for(let i=0; i<products.length;i++){
    products[i].price = prices[i]
   }

  return (
    <div>
      {products.filter((price)=> price.price > 1500).map(({description,price,colors})=>(
        <div key={description}>
          <h1 >{description}</h1>
          <p>Preço: {price}</p>
          <p style={{marginLeft:'30px'}}>
            Cores: 
            {colors.map((color)=> (<p style={{backgroundColor:color,color: 'white',
                fontWeight: 'bold' }}>{color}</p>))}
          </p>
        </div>
        ))}
    </div>
  );
}

export default App;
