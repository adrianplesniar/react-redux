import Ninjas from "./Ninjas";

function App() {
  return (
    <div className="App">
      <h1>My first React App</h1>
      <p>Welcome :)</p>
      <Ninjas name="Ryu" age="25" belt="black"/>
      <Ninjas name="Twoja Stara" age="69" belt="white"/>
    </div>
  );
}

export default App;
