import React from 'react'
import ReactDom from 'react-dom'
import Greeter from './Greeter'

// Components
// import AppBar from './components/AppBar/AppBar'

import './main.css'

const App =() => (
    <Greeter />
);

ReactDom.render( <App />, document.getElementById('root')  );
