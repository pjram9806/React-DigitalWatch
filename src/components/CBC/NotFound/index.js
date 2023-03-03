import React from 'react';
import notFound from '../../../../src/assets/img/not-found.jpg';
class NotFound extends React.Component 
{
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 

            <React.Fragment>
                <img src={notFound} alt="notfound" />                
            </React.Fragment>
         );
    }
}
 
export default NotFound;