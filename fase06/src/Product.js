const Product = ({nome, preco, foto}) => {
    const productPhoto = foto.filter( (item) => item.src.includes(`/${nome.toLowerCase()}`))
    console.log(typeof preco)

    return (
        <>
            <h1>{nome}</h1>
            <p>{`R$ ${Number(preco).toFixed(2)}`}</p>
            <div>
                <img src={productPhoto[0].src} alt={`it's a ${nome}`} />
            </div>

        </>
    );
}
export default Product