import React from "react";
import "./App.css";
import Header from './components/CBC/Header';
import Home from './components/CBC/Home';
import About from './components/CBC/About';
import Contact from './components/CBC/Contact';
import NotFound from './components/CBC/NotFound';
import BlogsList from "./components/CBC/BlogsList";

import { BrowserRouter,Link,Route,Router,Switch } from "react-router-dom";



class App extends React.Component 
{
  stae = {}

  render() 
  {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm blue-gradient-rgba">
          <a href="/" className="navbar-brand text-white">
            Routing
          </a>
        </nav>

        <div className="container m-3">
          <div className="row">

            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Contact/>
                </div>
              </div>
            </div>

            <div className="col-12 py-3">
              <div className="card">
                <div className="card-body">
                  <About/>
                </div>
              </div>
            </div>

          </div>
        </div>


{/*         <BrowserRouter>
        <Header/>
        
        <Switch>

        <Route  exact path='/contact'  component={Contact}  />

        <Route  exact path='/'  component={Home}  />
        <Route  exact path='/about'  component={About}  />
        <Route  component={NotFound}/> 
        </Switch>

        </BrowserRouter>
 */}



      </React.Fragment>
    );
  }
}

export default App;
