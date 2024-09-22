import Item from "./Item"
import Title from "./Title"

const products = [
    {nome:"Defender", propriedades:["Land Rover","630000"]},
    {nome:"Carro1", propriedades:["Marca Z","345000"]},
    {nome:"Carro2", propriedades:["Marca A", "760000"]}
]

const Products = () => {
    return (
        <>
            <Title texto="Hi this is products" />
            <p>Hello products</p>
            <p>
                {products.map((prod)=>(
                    <Item key={prod.nome} {...prod} />
                    ))}
            </p>
        </>
    )
}
export default Products