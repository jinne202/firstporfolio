import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './Navigation';
import Manager from './Manager';


const App = (props) => {
  return(

    < BrowserRouter>
      <div id="app">
        <Navigation/>
        <Manager/>
      </div>
    </BrowserRouter>
  )
};

export default App;
