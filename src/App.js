import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Food from './Components/Food';
import Article from './Components/Post';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/food" component={Food} />
        <Route path="/post" component={Article} />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
