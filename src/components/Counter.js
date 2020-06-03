import React from 'react';

class Counter extends React.Component {
    render() {
        const {
            onIncrement,
            clicksNumber
        } = this.props;
        
        return (
            <button onClick={ onIncrement }>
                { clicksNumber }
            </button>
        );
    }
}

export default Counter;