import React from 'react'
import context from './ctx'

function SecondComponent() {
  
    const componentContext = React.useContext(context)
    return (

        <div>
            <p>componente dentro de componente de app</p>
            SecondComponent: {componentContext} 
        </div>
  )
}

export default SecondComponent