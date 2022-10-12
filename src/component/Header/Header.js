import React from 'react';
import img from '../image/imgh.jpg'


const Header = () => {
    return (
        <div className='mb-5'>
            <section className="text-center bg-dark bg-gradient pt-3 pb-5  ">
                <h1 className=" text-warning pt-5 pb-4 mt-5">Give Quiz Test Build Your IQ </h1>
                <img src={img} alt="" />
                <p className="text-light px-5  mx-5 pb-5  ">It support differentiation and provide pre-teaching indicators, assessment for learning, rich feedback, self assessment and summative information about progress. They are also a great way to help with revision. And are a fun tool to help enthuse children to engage in their learning</p>
            </section>

        </div>
    );
};

export default Header;