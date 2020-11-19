import React, { Component } from 'react';


// Router
import { BrowserRouter, Route, Switch } from "react-router-dom";


// Pages
import GameSettings from './pages/GameSettings';
import Game from './pages/Game';
//import { quiz } from './components/quiz';
 
  //<Quiz quiz={quiz} showDefaultResult={false} customResultPage={renderCustomResultPage}/

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={GameSettings} />
                    <Route path="/ticTacToe" component={Game} />
                    
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;