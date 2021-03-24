import { Component } from 'react';
  class GroceryForm extends Component {
    state = { item: "", price: "", complete: false }
    

  handleSubmit = (c) => {
    c.preventDefault()
    if (this.props.id) {
      const { updateGrocery, toggleEdit } = this.props
      
      updateGrocery(this.props.id, this.state)

      toggleEdit()
    } else {
      this.props.addGrocery(this.state)
     
    }
    this.setState({ item: "", price: "" })
  }
  
  
  handleChange = (c) => {
    const { name, value } = c.target
    this.setState({ [name]: value })
  }
  componentDidMount() {
    if (this.props.id) {
      const { id, item, price } = this.props
      this.setState({ id, item, price, complete: false })
    }
  }
  
  
  
  render() {
    const { item, price } = this.state
    return (
    <form onSubmit={this.handleSubmit}>
      <input
        name="item"
        value={item}
        onChange={this.handleChange}
        required
        placeholder='Item'
     />
      <input
        name="price"
        value={price}
        onChange={this.handleChange}
        placeholder='price'
      />
      
      <button style={{color: "blue"}} type="submit">Submit</button>
    </form>
      )
    }
  }
  

export default GroceryForm;