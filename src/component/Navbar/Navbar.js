import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <section class="mb-5 pt-5">
                <nav class="navbar navbar fixed-top  navbar-expand-lg bg-light ">
                    <div class="container d-flex justify-content-between">
                        <div>
                            <Link class="navbar-brand fs-2 fw-bold" to={'/'}>Quiz World</Link>
                        </div>

                        <div class="d-flex">
                            <Link class="navbar-brand px-3" to={'/'}>Home</Link>
                            <Link class="navbar-brand px-3" to={'/quizstatic'}>Quiz Static</Link>
                            <Link class="navbar-brand px-3" to={'/blog'}>Blog</Link>
                            
                        </div>
                    </div>
                </nav>
            </section>
            
        </div>
    );
};

export default Navbar;