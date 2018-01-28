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
    return(
      // e.g. <div className="board-row">{this.renderSquare(0)}</div>
      // 因为在renderSquare() function中，Board调用并向Square传递property
      // 所以每执行一次render()，执行一次renderSquare()，就会发生一次从父到子的property传递
    );
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

4. UI = render(data)，React 中使用 JSX `render(){ return( // JSX ); }`来描述用户界面，JSX会被Babel编译成JavaScript


JSX:
```jsx
<div className="shopping-list"></div>
```

JavaScript:
```javascript
React.createElement("div", { className: "shopping-list" });
```

5. JSX中的JavaScript表达式要包含在{ }里。

6. prop用于组件之间传递数据，可以是任何一种JavaScript支持的数据类型；state代表组件内部状态，用于记录自身数据变化，必须是一个JavaScript对象。

7. **（子）组件不应该改变prop的值**，因为一个父组件可能吧props对象传值给多个子组件，会造成副作用；state存在的目的就是让组件改变的。

8. **状态提升：** 要实现“click一下button，就显示X”这个功能，需要给Square绑定onClick函数来改变Square显示的值，因为游戏胜负需要对整个盘面进行判断，所以Square的值最好放在Board组件中集中管理，这样就需要每Click一下，就由Board给Square通过`this.props.value`来传入新的square值。Board中的square值因为是需要改变的，就用`this.state.squares`来定义并在constructor()中初始化。因为onClick函数要用到可以改变的square值，所以也放在Board组件中定义，然后把定义好的函数"handleClick()"作为一个prop传递给Square。触发顺序：
Square被点击 -> Square的onClick()函数被触发 -> Board中`this.state.squares`在handleClick()中被改变，也就相当于触发了`this.props.value`的改变 -> Board重新render，Square上显示更新了的`this.props.value`。

9. 浅复制：
```jsx
handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
}
```
我们使用了`.slice()`方法来将之前的保存square值的数组数据浅拷贝到了一个新的数组中，而不是修改已有的数组。详细原因[参见教程](https://doc.react-china.org/tutorial/tutorial.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%8F%AF%E5%8F%98%E6%80%A7%E5%9C%A8react%E5%BD%93%E4%B8%AD%E9%9D%9E%E5%B8%B8%E9%87%8D%E8%A6%81)。

10. 只有render()的组件可以用function-based component。function-based组件里接受父组件的参数不用加`this`，直接用`props.value`，`props.onClick`就可以。function里也没有render,直接return。

11. 



