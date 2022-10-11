import React from 'react';
import './Quiz.css'

const Quiz = ({element}) => {
    const question=element.question;
    const updateque = question.replace(/(<([^>]+)>)/gi, "");
    return (
        <div>
        
            <div className="container mt-sm-5 my-1">
                <div className="question ml-sm-5 pl-sm-5 pt-2">
                    <div className="py-2 h5"><b>Q. {updateque}</b></div>
                    <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                        {Object.values(element.options).map((v, i) => {
                            return (
                                <div key={i}>
                                    <p>
                                        <label className="options">
                                            <input type="radio" name="radio" />
                                            <span className="checkmark"></span> {i + 1}.{v}
                                        </label>  
                                    </p>
                                </div>
                            );
                        })}

                        
                        
                    </div>
                </div>
                <div className="d-flex align-items-center pt-3">
                    <div id="prev">
                        <button className="btn btn-primary">Previous</button>
                    </div>
                    <div className="ml-auto mr-sm-5">
                        <button className="btn btn-success">Next</button>
                    </div>
                </div>
            </div>



        </div>
      
    );
};

export default Quiz;