/* import React from 'react';
import BlogItem from '../BlogItem';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

/* const  blogsData = 
[
    {
        id:1,
        title:'Blog 1',
        imageURL:'https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png',
        avatarURL:'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
        author:'Granville Everett',
        topic:'React.JS'
    },
    
    {
        id:2,
        imageURL:'https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png',
        avatarURL:'https://assets.ccbp.in/frontend/react-js/avatar-img.png',
        author:'Manhatten',
        topic:'React.JS'
    }
]
 
class BlogsList extends React.Component 
{
    constructor(props) {
        super(props);
    }
    state = { blogsData:[],isLoading:true }


    componentDidMount()
    {
        this.getBlogsData();
    }

    getBlogsData = async () =>
    {
        const response = await fetch("https://apis.ccbp.in/blogs");
        const data = await response.json();
        //console.log(data);
        const updatedData = data.map(eachItem => (
            {
                id:eachItem.id,
                title:eachItem.title,
                imageUrl:eachItem.image_url,
                avatarUrl:eachItem.avatar_url,
                author:eachItem.author,
                topic:eachItem.topic

            }));
        //console.log(updatedData);
        this.setState({blogsData:updatedData,isLoading:false})

    }



    render() 
    { 
        const {blogsData,isLoading} = this.state
        return ( 

            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    {isLoading 
                                    ? 
                                    <Loader type='TailSpin' color ='#00BFFF' height={50} width={50}/>
                                    :
                                    blogsData.map((eachItem)=>
                                    {
                                        return(
                                            <BlogItem blogData = {eachItem} key = {eachItem.id}/>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default BlogsList; */