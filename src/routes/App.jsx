// React, React Router
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Home from '../components/Home';
import Layout from '../components/Layout';
import Chats from '../components/Chats';

//Styles
import '../assets/styles/App.scss'

const App = () =>(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/chats" component={Chats} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;