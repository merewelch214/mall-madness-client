import React from 'react';
import StoreList from '../components/StoreList'
import NavBar from '../components/NavBar'

class MallContainer extends React.Component {

    render(){
        // console.log(this.props)
        return (
            <div>
                <NavBar />
                <div>
                    <h1>Mall Madness!</h1> 
                    <h1>-------------</h1><br/>
                    <h1>Please select a store:</h1>
                    <div className="store-list">
                        {this.props.stores.map(store => {
                            if(store.name){
                                return <StoreList key={store.id} store={store} />
                            } else {
                                return console.log(store)
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
};


export default MallContainer