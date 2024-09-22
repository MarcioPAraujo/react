const Item = ({nome, propriedades}) => {
    return (
    <div>
        <p>Nome: {nome}</p>
        <ul>{propriedades.map((atrib)=>(<li> {atrib}</li>))}</ul>
    </div>
)
}
export default Item