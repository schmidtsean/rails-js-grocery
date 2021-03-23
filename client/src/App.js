import { Component } from 'react';
import GroceryList from './components/grocery/GroceryList';
import GroceryForm from './components/grocery/GroceryForm';
import Footer from './components/grocery/Footer';
import axios from 'axios';
import './App.css'
class App extends Component {
  state = {
    groceries: [
      { id: 1, item: "Apple", price: "2", complete: false},
      { id: 2, item: "Cherry", price: "3", complete: false},
      { id: 3, item: "Banana", price: "1", complete: false},

    ],
    filter: 'All'
  }
  
  setFilter = (filter) => this.setState({ filter })
  
  componentDidMount() {
    axios.get('/api/groceries')
      .then( res => {
        this.setState({ groceries: res.data })
      })  
      .catch( err => console.log(err))
  }

  addGrocery = (grocery) => {
     axios.post('/api/groceries', { grocery })
    .then( res => {
      const { groceries } = this.state 
      this.setState({ groceries: [ ...groceries, res.data ] })
    })
    .catch( err => console.log(err))
}

  removeGrocery = (id) => {
    axios.delete(`/api/groceries/${id}`)
      .then( res => {
        const { groceries } = this.state 
        this.setState({ groceries: groceries.filter( g => g.id !== id )})
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  updateGrocery = (id, grocery) => {
    axios.put(`/api/groceries/${id}`, { grocery })
      .then( res => {
        const groceries = this.state.groceries.map( g => {
          if (g.id === id) {
            return res.data
          }
          return g
        })
        this.setState({ groceries })
      })
      .catch( err => console.log(err))
  }

  visibleItems = () => {
    const { groceries, filter } = this.state 
    switch(filter) {
      case 'Active':
        return groceries.filter( g => !g.complete)
      case 'Completed':
        return groceries.filter( g => g.complete)
      default:
        return groceries
    }
  }

  updateComplete = (id) => {
    const { groceries } = this.state
    this.setState({
      groceries: groceries.map( g => {
        if (g.id === id) {
          return {
            ...g, 
            complete: !g.complete
          }
        }
        return g
      })
    })
  }

  render() {
    const { groceries, filter } = this.state
    
    return (
      <>
      <h1>Grocery Store</h1>
     
      <Footer filter={filter} setFilter={this.setFilter} />
      <GroceryForm addGrocery={this.addGrocery}/>
      <GroceryList 
       groceries={this.visibleItems()} 
      
       removeGrocery={this.removeGrocery}
       updateGrocery={this.updateGrocery} 
       updateComplete={this.updateComplete}
      />
      </>

    )
  }
}

export default App;