import React, { useContext } from 'react';
import { QuizContext } from '../Layout/Layout';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useContext(QuizContext)
    return (
        <div className='mt-3'>
            <h1 className='font-semibold'>Test Your Skill...</h1>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-3'>
                {
                    quizes?.data?.map(quiz=> <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizes;