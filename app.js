// TODO
var GroceryList = () => (
  <div>
    <ul>
      <ChewingGum />
      <Socks />
    </ul>
  </div>
);

var ChewingGum = () => (
  <li>Chewing Gum</li>
);

var Socks = () => (
  <li>Socks</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
