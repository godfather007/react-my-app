import React, { Component , Fragment} from 'react';

class AppHeader extends Component {
    state = {  }
    render() { 
        const msg = 'Hello Abhay!';
        return ( 
            <Fragment>
            {msg}
            <hr/>
            <p>This is Abhay</p>
            </Fragment>
            );
    }
}
 
export default AppHeader;