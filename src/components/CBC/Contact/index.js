import React, { useEffect, useState } from 'react';

let  Contact = () =>
{
    let [currentTime,setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>
    {
        //componentDidMount
        let timerId = setInterval(()=>
        {
            setCurrentTime(new Date().toLocaleTimeString())
        },1000);

        return  ()=>
        {
            //componentwillunmout
            clearInterval(timerId);
        }


    },[])



    return (
        <React.Fragment>
            <div className="container py-3">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                <p className="h5">Digital Watch</p>
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

export default Contact;