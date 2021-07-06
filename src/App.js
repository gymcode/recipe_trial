import './App.css';
import {BrowserRouter as Router, route} from 'react-router-dom'
import {route} from './routes'

function App() {
  return (
      <Router>
        {route.map((data)=>{console.log(data)})}
      </Router>
  );
}

export default App;
