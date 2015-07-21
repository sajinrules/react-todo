var NavBar = React.createClass({
  render : function(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a target="_blank" title="Go Git repo" href="https://github.com/sajinrules/react-todo" className="brand-logo"><i className="material-icons left">code</i>React.js</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a target="_blank" href="https://in.linkedin.com/in/sajinaboobakkar">LinkedIn</a></li>
            <li><a target="_blank" href="https://www.facebook.com/sajinrules">Facebook</a></li>
            <li><a target="_blank" href="https://plus.google.com/u/0/+SajinMAboobakkar/about">Google Plus</a></li>
          </ul>
        </div>
      </nav>
    )
  }
})

var TodoAdd = React.createClass({
  render : function(){
    return(
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s10">
              <input type="text" value={this.props.text} />
              <label for="name">name</label>
            </div>
            <div className="input-field col s2">
              <a className="waves-effect waves-light btn" onClick={this.props.handleSubmit} >Add</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    console.log("e:",e);
    console.log("this.state.text:",this.state.text);
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <NavBar/>
        <TodoList items={this.state.items} />
        <TodoAdd text={this.state.text} onClick={this.state.handleSubmit}/>
      </div>
    );
  }
});
React.render(<TodoApp/>,document.body);
