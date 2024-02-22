import React, { Component } from 'react';
import WithMainCounter from './WithMainCounter'

export class WithClickCounter extends Component {

    render() {
        const { name, count, incrementCounter } = this.props
        return (
            <div>
                <h1>Count : </h1>
                <button onClick={incrementCounter}>
                    {name} Click {count} times
                </button>
            </div>
        )
    }
}

export default WithMainCounter(WithClickCounter)
