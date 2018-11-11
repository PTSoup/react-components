// // TODO
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

    this.state = {
      done: false
    }
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<GroceryList groceryItems={['Chewing Gum','Socks']} />, document.getElementById("app"));