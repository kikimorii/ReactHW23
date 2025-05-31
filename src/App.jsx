import { useState } from 'react';

const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');
    const [operator, setOperator] = useState('');

    const setOperatorFunc = (event) => {
        const buttonID = event.target.id;

        switch (buttonID) {
            case 'additionButton':
                setOperator('+');
                break;
            case 'subtractionButton':
                setOperator('-');
                break;
            default:
                setOperator('');
                break;
        }
    }


    return (
        <>
            <output>{operator ? operand2 : operand1}</output>
            <ul>
                {NUMS.map((number) => {
                    return (
                        <li key={"button" + number}>
                            <button>{number}</button>
                        </li>
                    );
                })}
                <li>
                    <button id='additionButton' onClick={setOperatorFunc}>+</button>
                </li>
                <li>
                    <button id='subtractionButton' onClick={setOperatorFunc}>-</button>
                </li>
                <li>
                    <button>C</button>
                </li>
                <li>
                    <button>=</button>
                </li>
            </ul>
        </>
    );
};

export default App;
