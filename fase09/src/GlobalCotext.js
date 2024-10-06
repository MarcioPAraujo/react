import React from 'react'

export const Context = React.createContext()

export const GlobalContext = ({ children }) => {

    const [product, setProduct] = React.useState(null)

    React.useEffect (() => {

      fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
      .then((Response) => Response.json())
      .then((json) => setProduct(json))

    }, [])

    function clearData (){
      setProduct(null)
    }
  return (
    <Context.Provider value={{product , clearData}}>{children}</Context.Provider>
  )
}
