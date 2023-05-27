import React from 'react';
import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className='app'>
      <div className='content'>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/home" component={HomePage} />
      </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
