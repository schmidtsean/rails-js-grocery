import { Component } from 'react';

class Counter extends Component {
  state = { stock: 0 }

  inc = () => {
    this.setState({ stock: this.state.stock + 1 })
  }

  dec = () => {
    this.setState({ stock: this.state.stock - 1 })
  }

  render() {
    const { stock } = this.state
    const { color } = this.props
    return (
      <div>
        <p>{color}stock:{stock}</p>
        <button style={{color: "blue"}} onClick={this.inc}>ADD</button>
        <button style={{color: "blue"}} onClick={this.dec}>SUB</button>
      </div>
    )
  }
}

export default Counter;