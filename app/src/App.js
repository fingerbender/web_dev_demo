import logo from './logo.png';
import './App.css';
import React from 'react';
import inventories from './inventory.json';
import InventoryList from "./InventoryList";
import InventoryAdd from "./InventoryAdd";

class App extends React.Component {
  constructor(props) {
    //props has nothing now?!
    //console.log("props:", toString(props), "type: ", typeof(props));
    super(props);
    this.state = { list : inventories };
    //{localPropName: importedPropName}
    //importedPropName = JSON in [], not {}
    this.deleteItem = this.deleteItem.bind(this); 
    this.addItem = this.addItem.bind(this);
    //sometimes function not detected within the class -> bind them in constructor
    //also fixed this.state.list not showing up in unbinded class function.
  }

  deleteItem (SKU) {
    console.log("Before deleteItem: ", this.state.list);
    //init local scope's "locList" with existing prop: "list"
    let locList = [...this.state.list];
    const index = locList.findIndex(item => item.SKU === SKU);
    locList.splice(index, 1);
    this.setState({list:locList}); 
    //preferred way to update state change, so Virtual DOM knows.
    //this.state.list = locList; //don't do direct assignment, Virtual DOM wont detect change.
    console.log("After deleteItem: ", this.state.list);
  }

  addItem (newSKU, newName, newQty, newPrice) {
    console.log("Before addItem: ", newSKU, newName, newQty, newPrice);
    let locList = [...this.state.list];
    const feedback = document.getElementById("feedback");
    feedback.style.color = "red";
    feedback.innerText = ""; //reset
    const index = locList.findIndex(item => item.SKU === newSKU);
    //console.log("index: ", index);

    //input validation, bc JSX property setting doesn't help
    if (!/(^[\w\d]{8,13}$)+/i.test(newSKU)){
      feedback.innerText = "SKU must be 8 - 13 alphanumeric characters long.";
    }else if (!/(^[\w\d]{2,20}$)+/i.test(newName)){
      feedback.innerText = "Product name must be 2 - 13 alphanumeric characters long.";
    }else if (!/^[\d]{1,4}$/.test(newQty) || newQty < 0){
      feedback.innerText = "Quantity must be a positive 1 to 4 digit integer  .";
    }else if (!/^([\d]+[\\.]?[\d]*)$/.test(newPrice) || ( 
    toString(newPrice).length > 20 || 
    toString(newPrice).length <1) ||
    isNaN(newPrice)){
      feedback.innerText = "Price must be a positive 1 to 20 digit float.";
    }else if(index !== -1 ){
      feedback.innerText = "SKU repeated! Please enter a unique SKU.";
    }else {
      //validation complete
      feedback.style.color = "greenyellow";
      feedback.innerText = "Item successfully added!";
      //instantiate an item, add it to local list
      const newItem = {};
      newItem.SKU = newSKU;
      newItem.name = newName;
      newItem.qty = newQty;
      newItem.price = newPrice;
      locList = [...locList, newItem];
      
      //console.log("locList: ", locList);
      //set local list as the new state
      this.setState({list: locList});
      console.log("After addItem: ", this.state.list, "len: '", toString(newPrice), "'", typeof(newPrice));
    }
  }

  render() {
    //console.log("render: ", this.state.list, "type: ", Array.isArray(this.state.list));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="React Grocery Store logo" />
          <h1>
            React Grocery Store
          </h1>
        </header>
        <main className="App-main" >
          {/*pass down props in format: passedPropName = {this.state.locPropName} */}
          {/*pass down functions in format: passedPropName = {this.locFuncName} */}
          {/*thru within custom JSX tag as tag property; tag = importedFuncName */}
          <InventoryList
            invList = {this.state.list}
            delItem = {this.deleteItem}
          >{/*opening tag closed here*/}
          </InventoryList >
          <h3>Add item into the inventory:</h3>
          <p id="feedback"></p>
          <InventoryAdd
            addItem = {this.addItem}
          ></InventoryAdd>
        </main>
      </div>
    );
  }
}
export default App;