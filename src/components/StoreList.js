import React from 'react';
import { Link } from 'react-router-dom';

const StoreList = (props) => {
    return (
        <Link to={`store/${props.store.name}`}>
            <div className={"store-list-item-box"}>
                {props.store.name}
            </div>
        </Link>
        
    )
}

export default StoreList;