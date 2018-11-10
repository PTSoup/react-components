// TODO
var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.item}</li>
    );
  }

}

ReactDOM.render(<GroceryList groceryItems={['Chewing Gum','Socks']} />, document.getElementById("app"));
