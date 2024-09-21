let client1={
  clientName: 'Nina',
  age: 30,
  products: [
    {description: 'phone', price: "R$ 4000", amount: 1},
    {description: 'book', price: "R$ 200", amount: 6},
    {description: 'purse', price: "R$ 4030", amount: 1},
    {description: 'dress', price: "R$ 900", amount: 3}
  ],
  active: true
}

let client2={
  clientName: 'john kramer',
  age: 50,
  products: [
    {description: 'phone', price: "R$ 2000", amount: 1},
    {description: 'book', price: "R$ 300", amount: 1},
    {description: 'rucksack', price: "R$ 430", amount: 1},
    {description: 'spoon', price: "R$ 1", amount: 12}
  ],
  active: false
}


function App() {

  const person = client1

  const fontColor = {
    color: person.active ? "green":"red",
  }

  const status = person.active ? "ativo":"inativo"
  

  // map() function retunr an array of the elemmnets performed in callback function
  let total = person.products.map((item) => Number(item.price.replace('R$','')))

  // reduce has a whic stores the previous value returned(whic was the sum a+b), b whic is the current value os the array, reduce also has index and array arguments 
  total = total.reduce((a,b)=>a+b)

  return (
    <div className="App">
      <p>nome: {person.clientName}</p>
      <p>idade: {person.age}</p>
      <p>
        situação: <span style={fontColor}>{status}</span>
      </p>
      <p>total da compra: {total}</p>
      {/* by using the expression below either you generate a 'p' tag or not,  this avoid unecessary tags in DOM*/}
      {total > 7000 && <p>você está prosperando...</p>}
    </div>
  );
}

export default App;
