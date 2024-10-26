import React from 'react'

function BoxQuestion({question, options, value, setValue}) {
  return (
    <div>
      <h1>{question}</h1>
      {
        options.map(option => (
          <label key={option}>
            <input
              type='radio'
              value={option}
              checked={value === option}
              onChange={({target}) => {setValue(target.value); console.log(target.value)}}
            />
            {option}
            <br />
          </label>
        ))
      }
    </div>
  )
}

export default BoxQuestion