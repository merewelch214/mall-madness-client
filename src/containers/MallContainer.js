import React from 'react';
import StoreList from '../components/StoreList'
import NavBar from '../components/NavBar'

class MallContainer extends React.Component {

    render(){
        return (
            <div>
                <NavBar />
                <div><h1>Mall Madness!</h1> 
                <h1>-------------</h1><br/>
                <h1>Please select a store:</h1>
                {this.props.stores.map(store => {
                    return <StoreList key={store.id} store={store} />
                })}</div>
            </div>
        )
    }
};


export default MallContainer