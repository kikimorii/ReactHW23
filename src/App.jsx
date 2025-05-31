const App = () => {
    const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <output></output>
            <ul>
                {NUMS.map((number) => {
                    return (
                        <li key={"button" + number}>
                            <button>{number}</button>
                        </li>
                    );
                })}
                <li>
                    <button>+</button>
                </li>
                <li>
                    <button>-</button>
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
