//import inventoryItems from "./inventory.json";
import React from 'react';
import "./InventoryItem.css";

function InventoryItem(props) {
    //console.log("item: ", props.item);
    //console.log("test delete func: ", typeof(props.delItem) === 'function');

    //need local handler, else the button auto clicks at page load
    const handleClick = (event) => {
        event.preventDefault()
        //cannot pass SKU in?!
        //const SKU = event.target; // the button, no values associated.
        console.log("click: ", props.item.SKU)
        props.delItem(props.item.SKU);
    }

    return (
        <tbody>
            {/*table rows from JSON, 1 row at a time. */}
            {
                <tr key={props.item.SKU}>
                    <td>{props.item.SKU}</td>
                    <td>{props.item.name}</td>
                    <td>{props.item.qty}</td>
                    <td>{props.item.price}</td>
                    <td>
                        <button onClick={handleClick}>delete</button>
                    </td>
                </tr>
            }
        </tbody>
    )
}

export default InventoryItem;