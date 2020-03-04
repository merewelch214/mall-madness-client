import React from 'react';
import { Link } from 'react-router-dom';

const StoreList = (props) => {
    return (
       <div> <Link to={`store/${props.store.name}`}>{props.store.name}</Link> </div>
    )
}

export default StoreList;