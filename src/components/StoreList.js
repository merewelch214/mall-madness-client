import React from 'react';
import { Link } from 'react-router-dom';

const StoreList = (props) => {
    return (
        <div className={"store-list-item-box"}>
            <Link to={`store/${props.store.name}`}>{props.store.name}</Link>
        </div>
    )
}

export default StoreList;