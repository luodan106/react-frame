import React from 'react';
import ReactDOM from 'react-dom';
import {Route,HashRouter as Router} from 'react-router-dom';
import Index from './components/Index';

class App extends React.Component{
    render(){
        return (
            <Router>
                <Route exact path="/" component={Index}/>
            </Router>
        )
    }
}

export default App;