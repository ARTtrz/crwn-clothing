
import './App.css';
import {
  Route,
  Switch,

} from "react-router-dom"

import HomePage from './pages/Homepage/hompage.component'

const HatsPage = () => {
  return (
    <p>Hats</p>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
