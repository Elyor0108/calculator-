import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

const Calculator = () => {
    // The useState hook is a function that is used to store state in a functional component.
    // It takes an argument as the initial state value and returns an array with 2 elements. 
    // The first element is the current state value. The second element is the state update function.
    const [ amount, setNumber ] = useState('');
    // In this case, it's much easier if you use const [number, setNumber] = useState(200). Also setNumber sets the value for number passed as an argument.

    const entity = ["+", "/", "-", "*", "="];

    const setInput = (price) => {
        if(price === "=") {
          return setNumber(eval(amount));  
        }
        if(
            // The include() method determines whether an array contains a given element, returning true or false depending on that.
            (entity.includes(price) && entity.includes(amount[amount.length - 1])) ||  
            (entity.includes(price) && !amount ) || ( price === '0' && !amount )) {
                return;
            }
            
        setNumber(amount + price);
    }

    return (
        
        <div className="calculator"> 
            <div className="row_null">{ amount || "0" }</div>
            <div>
                <div className="row">
                    <button onClick={() => setInput("7")} className="col-sm">7</button>
                    <button onClick={() => setInput("8")} className="col-sm">8</button>
                    <button onClick={() => setInput("9")} className="col-sm">9</button>
                    <button onClick={() => setInput("*")} className="col-sm">*</button>
                </div>
                <div className="row">
                    <button onClick={() => setInput("4")}className="col-sm">4</button>
                    <button onClick={() => setInput("5")}className="col-sm">5</button>
                    <button onClick={() => setInput("6")}className="col-sm">6</button>
                    <button onClick={() => setInput("-")}className="col-sm">-</button>
                </div>
                <div className="row">
                    <button onClick={() => setInput("1")}className="col-sm">1</button>
                    <button onClick={() => setInput("2")}className="col-sm">2</button>
                    <button onClick={() => setInput("3")}className="col-sm">3</button>
                    <button onClick={() => setInput("+")}className="col-sm">+</button>
                </div>
                <div className="row">
                    <button onClick={() => setInput("0")} className="col-sm">0</button>
                    <button onClick={() => setInput("=")} className="col-sm">=</button>
                    <button onClick={() => setNumber('')} className="col-sm clear">C</button>
                    <button onClick={() => setInput("/")} className="col-sm">/</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;