import React from 'react';

function Square(props) {	// function-based component用props传参
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;