import context from "./ctx";
import RandomComponent from "./RandomComponent";
import SecondComponent from "./SecondComponent";
function App() {
  return (
    <context.Provider value={2900}>
      <div className="App">
        <RandomComponent />
        <p>fim de random</p>
        <SecondComponent />
      </div>
    </context.Provider>
  );
}

export default App;
