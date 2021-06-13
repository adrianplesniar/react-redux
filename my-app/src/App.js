import Ninjas from "./Ninjas";

function App() {
    const ninjas = [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Benedict Cumberbatch", age: 43, belt: "Old black", id: 3 }
    ]
  return (
    <div className="App">
      <h1>My first React App</h1>
      <p>Welcome :)</p>
      <Ninjas ninjas={ninjas}/>
    </div>
  );
}

export default App;
