import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import search from '../pages/search';
import '../styles/global.scss'


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                
                    <Route exact path="/" component={Home} />
                    <Route exact path="/search" component={search} />
                
                </Switch>
            </Layout>
        </BrowserRouter>  
    );
}

export default App;