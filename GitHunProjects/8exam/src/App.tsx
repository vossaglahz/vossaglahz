import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './main';
import { one, two, three, four, five, six, seven, eight, nine, zero, enter, remove } from './store/actions';
import logo from "../public/images/giphy.gif";
import "./App.css";

const App: React.FC = () => {
    const dispatch = useDispatch();
    const hiddenKeypad = useSelector((state: RootState) => state.hiddenKeypad);

    const getTextColor = (text: string) => {
        if (text === 'Access Granted') {
            return 'green';
        }
        if (text === 'Access Denied') {
            return 'red';
        }
        return 'black';
    };

    return (
        <div className='Keypad'>
            <img src={logo} alt="giphy" />
            <div>
                <input className='Keypad-input' 
                    type="text" 
                    value={hiddenKeypad} 
                    readOnly 
                    style={{ color: getTextColor(hiddenKeypad) }}
                />
            </div>
            <div className='Keypad-buttons'>
                <button onClick={() => dispatch(one())}>1</button>
                <button onClick={() => dispatch(two())}>2</button>
                <button onClick={() => dispatch(three())}>3</button>
                <button onClick={() => dispatch(four())}>4</button>
                <button onClick={() => dispatch(five())}>5</button>
                <button onClick={() => dispatch(six())}>6</button>
                <button onClick={() => dispatch(seven())}>7</button>
                <button onClick={() => dispatch(eight())}>8</button>
                <button onClick={() => dispatch(nine())}>9</button>
                <button onClick={() => dispatch(remove())}>{"<"}</button>
                <button onClick={() => dispatch(zero())}>0</button>
                <button onClick={() => dispatch(enter())}>E</button>
            </div>
        </div>
    );
};

export default App;
