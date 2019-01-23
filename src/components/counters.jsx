import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 5 },
            { id: 2, value: 3 },
            { id: 3, value: 2 },
            { id: 4, value: 0 },
        ]
    }
   
    handleRemove = counterId => {
        this.setState({
            counters: this.state.counters.filter(counter => counter.id !== counterId)
        })
    }

    handleReset = () => {
        const counters = this.state.counters.map(counter => ({...counter, value: 0}));
        this.setState({ counters });
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;

        this.setState({ counters });
    }

    handleDecrement = counter => {
        if (counter.value <= 0) {
            return;
        }

        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;

        this.setState({ counters });
    }

  render() {
    return (
      <div>
          <button onClick={this.handleReset} className="btn btn-primary sm m-2">Reset</button>
          {
              this.state.counters.map(counter => <Counter
                key={counter.id}
                counter={counter}
                onRemove={() => this.handleRemove(counter.id)}
                onIncrement={() => this.handleIncrement(counter)}
                onDecrement={() => this.handleDecrement(counter)} />)
          }
      </div>
    )
  }
}

export default Counters;