import React, {Component} from 'react';


import './CounterInput.css';

class CounterInput extends Component {
    state = {
        input: ''
    };

    onChangeEvent = (e) => {
        let value = parseInt(e.target.value);
        if (!value) {
            value = 0;
        }
        this.setState({input: value}, function () {
            console.log(this.state);
        });
    };

    render() {
        return (
            <div className="CounterControl">
                {this.props.label}
                <input type="number" min={1} onChange={this.onChangeEvent}/>
                <button onClick={() => this.props.clicked(this.state.input)}>Add Now</button>
            </div>
        );
    }
}

export default CounterInput;