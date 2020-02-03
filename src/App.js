import React  from 'react';
import {connect}from 'react-redux'
 function  App(props)
{
    console.log(props)
return (
    <div className="App">
    <h1>i am  App Component</h1>
    <h1>my name is Abhay</h1>
    </div>
)
}

const mapStateProps = (state)=>{
return{
    myname:state
}
}


export default connect(mapStateProps)(App)