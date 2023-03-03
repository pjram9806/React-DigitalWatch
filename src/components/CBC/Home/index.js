import React from 'react';
import userImg from '../../../../src/assets/img/userImg.png'
class Home extends React.Component 
{
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 

            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="card text-center">
                                <div className="card-header">
                                    <h3 className='text-primary h3'>My Blog</h3>
                                    <div className="card-body  ">
                                        <img src={userImg} alt="user-img" className="" />
                                        <p className="text-dark text-bold">John Smilga</p>
                                        <p className="text-success">Sales Person UK</p>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-dark text-bold">First Post 
                                        <p className='text-bold'> August 19th</p>
                                        </p>
                                        
                                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque beatae qui in? Ducimus, corporis accusantium!</p>
                                        <hr />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Home;