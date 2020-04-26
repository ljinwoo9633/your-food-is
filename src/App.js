import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Detail from './Compeonts/Detail/Detail';

class App extends React.Component
{
  render()
  {
    return(
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Detail} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
