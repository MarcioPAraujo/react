import React from "react"

const Product = ({product}) => {
    const url = "https://ranekapi.origamid.dev/json/api/produto/"
    const [productData, setProductData] = React.useState(null)
    React.useEffect(() => {
        if(product  !== null){
            fetch (url.concat("",product))
                .then((response) => response.json())
                .then((json) => setProductData(json))
        }
        console.log(productData)
    }, [product])
    if(productData === null) return null
    return (
        <div>
            <h1>{productData.nome}</h1>
            <p>{productData.preco}</p>
        </div>
    )
}
export default Product