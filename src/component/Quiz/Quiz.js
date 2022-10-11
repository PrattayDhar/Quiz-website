import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './Quiz.css'


const Quiz = ({ element }) => {

    const question = element.question;
    const updateque = question.replace(/(<([^>]+)>)/gi, "");
    const [c, setCorrectans] = useState([]);
    const right = () => {
        const i = "i";
        toast("Right Answer", {
            toastId: i,
        });
    }
    const wrong = () => {
        const i = "i";
        toast("uff. Wrong Answer", {
            toastId: i,
        });
    };
    const eye = () => {
        const i = "i";
        toast(`${element.correctAnswer}` ,{
            toastId: i,
        });
    };

    return (
        <div>

            <div className="container mt-sm-5 my-1">
                <div className="question ml-sm-5 pl-sm-5 pt-2">
                    <div className="py-2 h5"><b>Q. {updateque} <button className='btn btn-light' onClick={eye}><FontAwesomeIcon icon={faEye} /></button></b></div>
                    <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                        {Object.values(element.options).map((v, i) => {
                            return (
                                <div key={i}>
                                    <p>
                                        <label className="options">
                                            <input type="radio" value={v} name={c} onChange={(e) => setCorrectans(e.target.value)} />

                                            <span className="checkmark"></span> {i + 1}.{v}
                                        </label>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>


            {
                c === element.correctAnswer ? right() : ''


            };
           
            {(() => {
                if (c.length !== 0) {
                    return c !== setCorrectans ? wrong() : "";
                } else {
                    return "";
                }
            })()}
          

            <ToastContainer />
        </div>

    );
};

export default Quiz;