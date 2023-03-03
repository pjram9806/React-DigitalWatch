import React from 'react';
import { BrowserRouter,Link,Route } from "react-router-dom";

class Header extends React.Component 
{
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 

            <React.Fragment>
              <ul className="nav-menu">
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to = '/about'>About</Link>
                </li>

                <li>
                    <Link to = '/contact'>Contact</Link>
                </li>
              </ul>
            </React.Fragment>
         );
    }
}
 
export default Header;