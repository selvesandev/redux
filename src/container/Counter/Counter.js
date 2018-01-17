import React, {Component} from 'react';

import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    };

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => {
                    return {counter: prevState.counter + 1}
                });
                break;
            case 'dec':
                this.setState((prevState) => {
                    return {counter: prevState.counter - 1}
                });
                break;
            case 'add':
                this.setState((prevState) => {
                    return {counter: prevState.counter + value}
                });
                break;
            case 'sub':
                this.setState((prevState) => {
                    return {counter: prevState.counter - value}
                });
                break;
        }
    };

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}/>
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}/>
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li style={{textAlign: 'left'}} onClick={() => this.props.onDeleteResult(strResult.id)}
                            key={strResult.id}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
};

const mapDispatch = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', payload: {value: 5}}),
        onSubtractCounter: () => dispatch({type: 'SUB', payload: {value: 5}}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (currentId) => dispatch({type: 'DELETE_RESULT', resultElId: currentId})
    }
};

export default connect(mapStateToProps, mapDispatch)(Counter);