import './App.css';
import './Components/DisplayBtree.css';
import React from 'react';
import GetInputs from './Components/GetInputs';
import DisplayBtree from './Components/DisplayBtree';
import DisplayMsg from './Components/DisplayMsg';

const App = () => {
  const [root, setroot] = React.useState(null);
  const [msg, setmsg] = React.useState("");
  const InsertElement = val => {
    let newroot = null;
    if (root !== null) {
      newroot = {
        value: root.value,
        left: root.left,
        right: root.right
      }
    }
    let node = {
      value: val,
      left: null,
      right: null
    }
    let temp = newroot;
    if (temp === null)
      newroot = node;
    while (temp !== null) {
      const val1 = parseInt(temp.value, 10);
      const val2 = parseInt(val, 10);
      if (true && (val1 > val2)) {
        if (temp.left === null) {
          temp.left = node;
          break;
        }
        temp = temp.left;
      }
      else {
        if (temp.right === null) {
          temp.right = node;
          break;
        }
        temp = temp.right;
      }
    }
    setroot(newroot);
    let st = val.toString() + " is INSERTED Successfully."
    setmsg(st);
  }
  const MinValue = node => {
    let temp = node;
    while (temp !== null && temp.left !== null) {
      temp = temp.left;
    }
    return temp;
  }
  const RemoveNode = (node, val) => {

    if (node === null)
      return null;
    const val1 = parseInt(node.value, 10);
    const val2 = parseInt(val, 10);
    if (val2 < val1) {
      node.left = RemoveNode(node.left, val);
      return node;
    }
    else if (val2 > val1) {
      node.right = RemoveNode(node.right, val);
      return node;
    }
    else {
      if (node.left === null && node.right === null) {
        node = null;
        setmsg(val.toString() + " is DELETED Successfully.");
        return node;
      }
      if (node.left === null) {
        node = node.right;
        setmsg(val.toString() + " is DELETED Successfully.");
        return node;
      }
      else if (node.right === null) {
        node = node.left;
        setmsg(val.toString() + " is DELETED Successfully.");
        return node;
      }
      let minn = MinValue(node.right);
      node.value = minn.value;
      node.right = RemoveNode(node.right, minn.value);
      setmsg(val.toString() + " is DELETED Successfully.");
      return node;
    }
  }
  const DeleteElement = val => {
    let st = val.toString() + " is NOT Found for DELETE.";
    setmsg(st);
    let temp = null;
    if (root !== null) {
      temp = {
        value: root.value,
        left: root.left,
        right: root.right
      }
    }

    setroot(RemoveNode(temp, val));
  }
  const SearchElement = val => {
    let temp = root;
    let flag = 0;
    while (temp !== null) {
      const val1 = parseInt(temp.value, 10);
      const val2 = parseInt(val, 10);
      if (val1 === val2) {
        flag = 1;
        break;
      }
      else if (val1 > val2) {
        temp = temp.left;
      }
      else {
        temp = temp.right;
      }
    }
    if (flag === 1) {
      let st = val.toString() + " is FOUND in Tree."
      setmsg(st);
    }
    else {
      let st = val.toString() + " is NOT FOUND in Tree."
      setmsg(st);
    }
  }
  return (
    <div className='all'>
      <h1 className='name'>Binary Search Tree</h1>
      <GetInputs InsertElement={InsertElement} DeleteElement={DeleteElement} SearchElement={SearchElement} />
      <div className='tree'><DisplayBtree node={root} flag={0} /></div>
      <DisplayMsg msg={msg} />
    </div>
  );
}

export default App;


