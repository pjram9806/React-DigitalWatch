import React from 'react';
import aboutImg from '../../../../src/assets/img/about-us.jpg';

class About extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
             currentTime:new Date().toLocaleTimeString() 
        }
    }
    
    componentDidMount()
    {
        this.timerId = setInterval(()=>
        {
            this.setState({
                currentTime:new Date().toLocaleTimeString()
            })
        },1000)
    }

    componentWillUnmount()
    {
        clearInterval(this.timerId);
    }

    render() 
    { 
        let {currentTime} = this.state;
        return ( 

            <React.Fragment>
            <div className="container py-3">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                <p className="h5">Digital Watch From Class Based Component</p>
                            </div>
                            <div className="card-body">
                                <h3 className="display-3">{currentTime}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
         );
    }
}
 
export default About;


