import './Item.css'
import React from 'react';
function Item(props)
{

    const itemName = props.name;
    return(<p className="nirma">{itemName}</p>);
}

export default Item;