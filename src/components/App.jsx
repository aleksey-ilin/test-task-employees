import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Main from './Main';
import AddEmployee from './AddEmployee';
import Settings from './Settings';

const App = () => (
  <CssBaseline>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/add" component={AddEmployee} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  </CssBaseline>
);

export default App;
