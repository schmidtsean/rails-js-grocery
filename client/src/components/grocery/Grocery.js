import { Component } from 'react';
import GroceryForm from './GroceryForm';
import Counter from './Counter';
class Grocery extends Component {
    state = { editing: false }
    toggleEdit = () => {
        const { editing } = this.state
        this.setState({ editing: !editing })
    }
    render() {
        const { editing } = this.state
        const { item, price, id, removeGrocery, complete, updateGrocery, updateComplete} = this.props
        const styles = {
          buttonStyleEdit: {
            backgroundColor: "blue"
      },

        buttonStyleComplete: {
          backgroundColor: "yellow"
        },
        
        buttonStyleDelete: {
          backgroundColor: "red"
        },
   
          complete: {
              color: "gray",
              textDecoration: 'line-through'
        
          }
    }
        return(
      
        <div>
              <ul style={ complete ? {...styles.complete } : null }
             onClick={() => updateGrocery(id)}>
            <h1>Item: {item}</h1>
            <h3>Price: ${price}</h3>
            <h3><Counter/></h3>
            
            </ul>
            <button style={styles.buttonStyleComplete} onClick={() => updateComplete(id)}>Complete</button>
            
            <button style={styles.buttonStyleDelete} onClick={() => removeGrocery(id)}>
                Delete Item
            </button>
          
            
            {editing ?
              <GroceryForm {...this.props} toggleEdit={this.toggleEdit} />
              :
              <button style={styles.buttonStyleEdit} onClick={() => this.toggleEdit()}>Edit</button>
            }
            
            
            
          
          </div>
          
         )
       }
    }

export default Grocery;