import React from 'react';

const StoreList = (props) => {
    // console.log(props)
    return (
        <li onClick={() => props.setStore(props.store)}>{props.store.name}</li>
    )
}

export default StoreList;