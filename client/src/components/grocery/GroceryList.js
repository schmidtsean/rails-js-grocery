import Grocery from './Grocery';

const GroceryList = ({ groceries, removeGrocery, updateGrocery, updateComplete }) => {
  
  return (
    <>
      {
        groceries.map( g => (
          <Grocery
          key={g.id}
            {...g}
            removeGrocery={removeGrocery}
            updateGrocery={updateGrocery}
            updateComplete={updateComplete}
          />
        ))
      }

    </>
  )
}
export default GroceryList;