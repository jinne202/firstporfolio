import React from 'react';
import { Switch , NavLink , Route , withRouter } from 'react-router-dom';
import {
  Main,
  Contact,
  Project,
} from '../pages';

const Manager = (props) => {

  return(
    <div id = "page_container">
        <Switch>
            <Route path="/" exact render={ (props) =>
               <Main/>
            }/>
            <Route path="/contact" render={ (props) =>
               <Contact/>
            }/>
            <Route path="/project" render={ (props) =>
               <Project/>
            }/>
        </Switch>
    </div>
  );
};

export default withRouter(Manager);
