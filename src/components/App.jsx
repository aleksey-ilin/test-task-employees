import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import EmployeesList from './EmployeesList';
import AddEmployee from './AddEmployee';
import Settings from './Settings';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={EmployeesList} />
      <Route path="/add" component={AddEmployee} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </Router>
);

export default App;
