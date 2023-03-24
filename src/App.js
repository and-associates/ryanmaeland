import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route component={Home} path='/' />
      <Route component={About} path='/about' />
    </Switch>
    </BrowserRouter>
  )
}

export default App;
