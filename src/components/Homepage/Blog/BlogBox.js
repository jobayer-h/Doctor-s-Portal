import React from 'react';
import './Blog.css'
const BlogBox = ({blog}) => {


    

    return (
        <div className="col-md-4 my-3">
            <div id="blog-box" className="testimonial-wraper blog-wraper">


            <div className="user">
                    <div id="user-img">
                        <img src={blog.img} alt="" />
                    </div>
                    <div>
                        <h5>{blog.name}</h5>
                        <small>{blog.date}</small>
                    </div>
                </div>

                <div className="pt-5">
                    <h5>{blog.title}</h5>
                    <small className="blog-title">{blog.text}</small>
                    <br/>
                    <br/>
                    <h1 id="read-more" style={{display:'none'}} > read more </h1>
                </div>
                
            </div>
        </div>
    );
};

export default BlogBox;