import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import App from './App'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'
const store = createStore(reducer);
class Index extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Provider store={store}>  <App/></Provider>
        </div>
         );
    }
}
 
ReactDOM.render(<Index/>,document.getElementById('root'));

export default Index;