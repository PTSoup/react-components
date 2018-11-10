// TODO
var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
  </ul>
)



var GroceryList = () => (
  <div>
   <h2>My Grocery List</h2>
    <GroceryListItem groceryItems={['tacos', 'socks']}/>
  </div>
);

// var ChewingGum = () => (
//   <li>Chewing Gum</li>
// );

// var Socks = () => (
//   <li>Socks</li>
// );

ReactDOM.render(<GroceryList />, document.getElementById("app"));
