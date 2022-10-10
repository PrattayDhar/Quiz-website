import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Qustion = () => {
    const questions=useLoaderData();
    const que=questions.data.questions

    return (
        <div>
            {
                que.map(element=>(<Quiz key={element.id} element={element}></Quiz>))
            }
        </div>
    );
};

export default Qustion;