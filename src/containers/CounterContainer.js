// ./src/containers/CounterContainer.js
import React from 'react';

import Counter from '../components/Counter';
import withOpacity from '../hoc/withOpacity';

const CounterWithOpacity = withOpacity(0.1, 5)(Counter);

class CounterContainer extends React.Component {
    state = { 
        clicksNumber: 0,
    }

    increment = () => {
        const { clicksNumber } = this.state;
        this.setState({
            clicksNumber: clicksNumber +1,
        });
    }

    render() {
        
        return <CounterWithOpacity
            onIncrement={ this.increment }
            clicksNumber={ this.state.clicksNumber }
        />
    }
}

export default CounterContainer