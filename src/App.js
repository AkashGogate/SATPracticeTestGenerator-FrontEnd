import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../sat-assistant/src/components/LandingPage';
import PracticeTestMenu from '../sat-assistant/src/components/PracticeTestMenu';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/practice" component={PracticeTestMenu} />
      </Switch>
    </Router>
  );
}

export default App;