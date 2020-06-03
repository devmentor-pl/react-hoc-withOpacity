// ./src/components/App.js
import React from 'react';

import Counter from '../containers/CounterContainer';
import withLoader from '../hoc/withLoader';

const CounterWithLoader = withLoader('Loading')(Counter); 

class App extends React.Component {
    render() {
        return <Counter />
    }
}

export default App;