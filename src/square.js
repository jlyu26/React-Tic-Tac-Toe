import React, { Component } from 'react';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}    {/* Square是Board的子组件，通过this.props.value调用Board传递下来的名为value的属性 */}
      </button>
    );
  }
}

export default Square;