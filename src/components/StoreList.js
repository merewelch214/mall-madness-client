import React from 'react';
import { Link } from 'react-router-dom';

const StoreList = (props) => {
    return (
       <li> <Link to={`store/${props.store.name}`}>{props.store.name}</Link> </li>
    )
}

export default StoreList;