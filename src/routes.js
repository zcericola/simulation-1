import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shelf from './components/Shelf/Shelf';
import Bin from './components/Bin/Bin';
import Create from './components/Create/Create';

export default (
    <Switch>
        <Route exact path = '/' component = {Home} />        
        <Route path = '/shelf/bins/:id' component = {Bin} />        
        <Route path = '/create' component = {Create} />
    </Switch>
)