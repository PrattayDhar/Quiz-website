import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';


const Home = () => {
    const loaddata = useLoaderData();
    const subjects = loaddata.data
    console.log(subjects);
    return (
        <div>
            <Header></Header>
            {/* <div className=" card-group mb-5 g-5">
               {
                    subjects.map(subject => (
                    <div className="card bg-secondary ">
                    <img src={subject.logo} className="card-img-top w-50 " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{subject.name}</h5>
                        <Link to={'/'} class="btn btn-primary">Start Quiz</Link>
                        
                    </div>
                </div>))
               }
                



            </div>
         */}
            <div className='row row-cols-1 row-cols-md-2 g-4  '>
                {
                    subjects.map(subject => (<div >
                        <div class="col">
                            <div class="card mb-3 bg-info">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={subject.logo} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{subject.name}</h5>
                                            <h6>Number Of Question: {subject.total}</h6>
                                            <p>That Quiz is a website featuring multiple-choice, matching, and short-answer tests on a variety of core subjects.</p>
                                            <Link to={'/'} class="btn btn-primary mt-5 ">Start Quiz</Link>

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