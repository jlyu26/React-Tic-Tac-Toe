import React, { Component } from 'react';
import Square from './square';

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} print={"another property"}/>;  // 父组件Board向Square传递名为value和print的property
  }

  render() {

      const status = 'Next player: X';

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

export default Board;

