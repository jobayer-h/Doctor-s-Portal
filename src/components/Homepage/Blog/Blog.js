import React from 'react';
import person1 from '../../../images/Ellipse 1.png';
import person2 from '../../../images/Ellipse 2.png';
import person3 from '../../../images/Ellipse 3.png';
import BlogBox from './BlogBox';
import './Blog.css'
const Blog = () => {
    const blogData = [
        {
            img: person1,
            name: 'Dr. Caudi',
            date: '23 April 2019',
            title: 'The Tooth Cancer is taking a challenge',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat porro ab dignissimos animi doloribus?'
        },
        {
            img: person3,
            name: 'Dr. Caudi',
            date: '23 April 2019',
            title: 'The Tooth Cancer is taking a challenge',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat porro ab dignissimos animi doloribus?'
        },
        {
            img: person2,
            name: 'Dr. Caudi',
            date: '23 April 2019',
            title: 'The Tooth Cancer is taking a challenge',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat porro ab dignissimos animi doloribus?'
        }
    ];
    return (
        <div className="my-5">
            <h4 className="text-center brand-text">OUR BLOG</h4>
            <h2 className="text-center" style={{marginBottom:'30px',marginTop:'40px'}}>From Our Blog News</h2>

            <div className="row">
                {
                    blogData.map(blog => <BlogBox blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blog;