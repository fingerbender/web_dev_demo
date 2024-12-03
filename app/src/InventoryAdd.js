import React from 'react';
import "./InventoryAdd.css";

export default function InventoryAdd (props){
    //console.log("test add func: ", typeof(props.addItem) === 'function');

    const addItem = (event) => {
        event.preventDefault();
        const newSKU = document.getElementById("newSKU").value;
        const newName = document.getElementById("newName").value;
        const newQty = Number.parseInt(document.getElementById("newQty").value);
        const newPrice = Number.parseFloat(document.getElementById("newPrice").value);
        console.log(typeof(newQty), newQty, typeof(newPrice), newPrice);
        props.addItem(newSKU, newName, newQty, newPrice);
    }

    return (
        <div className = "InventoryAdd">
            <label>SKU:
                <input type="text" id="newSKU" placeholder="8-13 digit SKU" size="14" />
            </label>
            <label>Product Name: 
                <input type="text" id="newName" placeholder="Product Name" size="20" />
            </label>
            <label>Quantity: 
                <input type="number" step="1" min="0" max="9999" id="newQty" placeholder="Quantity" size="4" />
            </label>
            <label>Price: 
                <input type="number" step="0.01" min="0" max="99999999.99" id="newPrice" placeholder="Price" size="8" />
            </label>
            <button type="button" id="addBtn" onClick={addItem}>Add</button>
        </div>
    )
}