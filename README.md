# 打井游戏 Notes

0. create-react-app 的文件结构：`public`文件夹里存放图片和`index.html`等文件。

1. React是**单项数据流**，数据只能从父组件传向子组件；

2. **父组件通过在子组件上设置属性来传递数据，子组件通过`this.props.属性名`接受和使用数据**

```jsx
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} print={"another property"}/>;  // 父组件Board向Square传递名为value和print的property
  }

  render() {
    console.log(this);  // Board {props: {…}, context: {…}, refs: {…}, updater: {…}, state: null, …}
  }
}

class Square extends React.Component {
  render() {
    console.log(this);  // Square {props: {…}, context: {…}, refs: {…}, updater: {…}, state: null, …}
    console.log(this.props);  // {value: 0, print: "another property"}

    return (
      <button className="square">
        {this.props.value}    // Square是Board的子组件，通过this.props.value调用Board传递下来的名为value的属性
      </button>
    );
  }
}
```

3. 要在父组件的.js中先import子组件

```jsx
import Square from './square';
```

4. 