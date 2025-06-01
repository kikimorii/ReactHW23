import { useState } from "react";

const NUMS = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const App = () => {
    const [operand1, setOperand1] = useState("");
    const [operand2, setOperand2] = useState("");
    const [operator, setOperator] = useState("");

    const setOperatorFunc = (event) => {
        const buttonID = event.target.id;

        switch (buttonID) {
            case "additionButton":
                setOperator("+");
                break;
            case "subtractionButton":
                setOperator("-");
                break;
            default:
                setOperator("");
                break;
        }
    };

    const cleaningOperators = () => {
        setOperand1("");
        setOperand2("");
        setOperator("");
    };

    const calculationResult = () => {
        switch (operator) {
            case "+":
                setOperand1(Number(operand1) + Number(operand2));
                setOperator("");
                setOperand2("");
                break;
            case "-":
                setOperand1(Number(operand1) - Number(operand2));
                setOperator("");
                setOperand2("");
                break;
            default:
                break;
        }
    };

    const addNumberToOperand = (event) => {
        const number = event.target.innerText;

        if (!operator) {
            if (!(operand1 === "" && number === "0")) {
                setOperand1(operand1 + number);
            }
        } else {
            if (!(operand2 === "" && number === "0")) {
                setOperand2(operand2 + number);
            }
        }
    };

    return (
        <>
            <output>{operand2 ? operand2 : operand1}</output>
            <ul>
                {NUMS.map((number) => {
                    return (
                        <li key={"button" + number}>
                            <button onClick={addNumberToOperand}>
                                {number}
                            </button>
                        </li>
                    );
                })}
                <li>
                    <button id="additionButton" onClick={setOperatorFunc}>
                        +
                    </button>
                </li>
                <li>
                    <button id="subtractionButton" onClick={setOperatorFunc}>
                        -
                    </button>
                </li>
                <li>
                    <button onClick={cleaningOperators}>C</button>
                </li>
                <li>
                    <button onClick={calculationResult}>=</button>
                </li>
            </ul>
        </>
    );
};

export default App;
