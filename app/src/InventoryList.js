import React from 'react';  //this is required for .map() to work in JSX
//import inventoryItems from './inventory.json';
import InventoryItem from './InventoryItem';
import "./InventoryList.css";

function InventoryList(props) {
    //console.log("invlist: ", props.invList, typeof (props.invList), Array.isArray(props.invList), props.invList === undefined);
    //console.log("delete func: ", typeof(props.delItem)==='function');

    //other functions like add & remove
    



    return (
        <table className="scrollable">
            <thead>
                <tr>
                    {/*table header*/}
                    <td>SKU</td>
                    <td>Name</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Action</td>
                    {/*<td>Action</td>*/}
                </tr>
            </thead>
            {/*list rendering*/}
            {props.invList.map(item => (
                <InventoryItem
                    key = {item.SKU}
                    item = {item}
                    delItem = {props.delItem}
                >
                </InventoryItem>
                
            ))}
        </table>
    );
}

export default InventoryList;