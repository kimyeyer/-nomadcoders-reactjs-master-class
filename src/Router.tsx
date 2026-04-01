import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin';
const Router = () => {
  return (
    <HashRouter>
        <Switch>
            <Route path="/" exact>
                <Coins></Coins>
            </Route>
            <Route path="/:coinId">
                <Coin></Coin>
            </Route>
        </Switch>
    </HashRouter>
  )
}

export default Router