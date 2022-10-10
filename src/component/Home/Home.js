import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
const Home = () => {
    const loaddata = useLoaderData();
    const subjects = loaddata.data
    return (
        <div>
            <Header></Header>

            <div className='row row-cols-1 row-cols-md-2 g-4  '>
                {
                    subjects.map(subject => (<div >
                        <div className="col">
                            <div className="card mb-3 bg-info">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={subject.logo} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{subject.name}</h5>
                                            <h6>Number Of Question: {subject.total}</h6>
                                            <p>That Quiz is a website featuring multiple-choice, matching, and short-answer tests on a variety of core subjects.</p>
                                            <Link to={`/quiz/${subject.id}`} className="btn btn-primary mt-5 ">Start Quiz</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    ))
                }

            </div>

        </div>
    );
};

export default Home;