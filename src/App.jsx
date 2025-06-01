import { useState } from "react";
import styles from "./App.module.css";

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
        <div className={styles.wrapper}>
            <output className={styles.output}>
                {operand2 ? operand2 : operand1}
            </output>
            <ul className={styles.numberList}>
                <li>
                    <button onClick={cleaningOperators} className={styles.clearButton}>C</button>
                </li>
                <li>
                    <button id="additionButton" onClick={setOperatorFunc} className={styles.functionButton}>
                        +
                    </button>
                </li>
                <li>
                    <button id="subtractionButton" onClick={setOperatorFunc} className={styles.functionButton}>
                        -
                    </button>
                </li>
                {NUMS.map((number) => {
                    return (
                        <li key={"button" + number}>
                            <button onClick={addNumberToOperand}>
                                {number}
                            </button>
                        </li>
                    );
                })}
                <li className={styles.calculation}>
                    <button onClick={calculationResult} className={styles.functionButton}>=</button>
                </li>
            </ul>
        </div>
    );
};

export default App;
