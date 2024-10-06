import React from 'react'
import context from './ctx'
import SecondComponent from './SecondComponent'

function RandomComponent() {
    const componentContext = React.useContext(context)
  return (
    <>
        <h1>componente: {componentContext}</h1>
        <context.Provider value={2400}>
            <p>random</p>
            <SecondComponent />
        </context.Provider>
    </>
  )
}

export default RandomComponent