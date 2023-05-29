import { useState } from 'react';
import './Eightball.css';

const EightBall = ({ answers }) => {
    const [color, setColor] = useState("black");
    const [answer, setAnswer] = useState(null);

    const randomAnswer = () => {
        const random = Math.floor(Math.random() * answers.length);
        setColor(answers[random].color);
        setAnswer(answers[random].msg);
    }

    return (
        <div className="eightball" onClick={randomAnswer} style={{ backgroundColor: color }}>
            <p className='eightball-text'>{answer ? answer : 'Think of your question.'}</p>
        </div>)
};

export default EightBall;