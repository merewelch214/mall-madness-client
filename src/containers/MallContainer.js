import React from 'react';
import StoreList from '../components/StoreList'
import NavBar from '../components/NavBar'

class MallContainer extends React.Component {

    splitStores = () => {
        let leftStores = []
        let rightStores = []
        this.props.stores.map((store, index) => {
            if (store.name) {
                if (index % 2 === 0) {
                    return leftStores.push(store)
                } else {
                    return rightStores.push(store)
                }
            } else {
                return console.log(store)
            }
        })
        return (
            <div className="store-parent">
                <div className="store-items-left">
                    {leftStores.map(store => {
                        return <StoreList key={store.id} store={store} />
                    })}
                </div>
                <div className="store-items-right">
                    {rightStores.map(store => {
                        return <StoreList key={store.id} store={store} />
                    })}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <NavBar />
                <div>
                    <h1>Mall Madness!</h1>
                    <div className="store-list">
                        {this.splitStores()}
                    </div>
                </div>
            </div>
        )
    }
};


export default MallContainer