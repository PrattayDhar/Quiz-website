import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <section className="mb-5 pt-5">
                <nav className="navbar navbar fixed-top  navbar-expand-lg bg-light ">
                    <div className="container d-flex justify-content-between">
                        <div>
                            <Link className="navbar-brand fs-2 fw-bold" to={'/'}>Quiz World</Link>
                        </div>

                        <div className="d-flex">
                            <Link className="navbar-brand px-3" to={'/'}>Home</Link>
                            <Link className="navbar-brand px-3" to={'/quizstatic'}>Quiz Static</Link>
                            <Link className="navbar-brand px-3" to={'/blog'}>Blog</Link>

                        </div>
                    </div>
                </nav>
            </section>

        </div>
    );
};

export default Navbar;