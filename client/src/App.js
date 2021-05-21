import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Record from './pages/RecordsCall';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/'>
            <Record />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
