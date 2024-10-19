import React from 'react';
const colors_list = [ 
  'red',
  'green',
  'blue',
  'yellow',
  'orange',
  'purple',
  'black',
  'white',
  'pink',
  'brown',
];
function App() {
  const [checkedColors, setChecked] = React.useState([]);

  const handleChange = ({target}) => {
    const{checked, value} = target;
    if (checked) {
      setChecked([...checkedColors, value]);
    } else {
      setChecked(checkedColors.filter(color => color !== value));
    }
  }

  return (
    <div className="App">
     {colors_list.map((color, index) => (
         <label key={index}>
          <input 
            type="checkbox"
            value={color}
            checked={checkedColors.includes(color)}
            onChange={handleChange}
          />
          {console.log(checkedColors)}
          {color}
          <br/>
          </label>
          
     ))}
    </div>
  );
}

export default App;
