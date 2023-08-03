import React from "react";


function App() {
  const [item, setItem] = React.useState(" ");

  function changeHandler(event){
    const new_item = event.target.value;
    setItem(new_item);
  }

  const [item_list, setItemList] = React.useState([]);

  function clickHandler(){
    setItemList((preItem)=>{return [...preItem, item]})
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandler} type="text" value={item}/>
        <button onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item_list.map((items)=>{
            return(<li>{items}</li>);
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
