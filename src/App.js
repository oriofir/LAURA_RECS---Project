import react from "react";
import Home from "./Home";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <h1>APP Check WOWOW</h1>
        <Home />
      </main>
    </div>
  );
}

export default App;
