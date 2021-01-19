import './App.css';
import Router from "./Routes/Router"
import GlobalState from "./Global/GlobalState"

function App() {
  return  <GlobalState className="App">
    <Router/>
  </GlobalState>
}

export default App;
