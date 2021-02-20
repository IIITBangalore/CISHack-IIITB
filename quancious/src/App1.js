import { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import App from './App';
import home from './home';
import analysis from './analysis';

class App1 extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={App}></Route>
                    <Route exact path="/home" component={home}></Route>
                    <Route exact path="/analysis" component={analysis}></Route>
                </div>
            </BrowserRouter>
        )
    }
}
export default App1;