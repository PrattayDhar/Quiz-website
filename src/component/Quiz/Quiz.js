import React from 'react';

const Quiz = ({element}) => {
    const question=element.question;
    const updateque = question.replace(/(<([^>]+)>)/gi, "");
    return (
        <div>
           <h1>{updateque}</h1> 

            {Object.values(element.options).map((v, i) => {
                return (
                    <div key={i}>
                        <p>
                            {i + 1}.{v}
                        </p>
                    </div>
                );
            })}
        </div>
      
    );
};

export default Quiz;