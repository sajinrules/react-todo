var TodoNavBar = React.createClass({
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

var TodoApp = React.createClass({
  getInitialState: function(){
    return {items: []};
  },
  updateItems: function(newItem){
    var allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  },
  removeUpdate : function(key){
    console.log("key:",key)
  },
  render: function(){
    return(
      <div>
        <TodoNavBar/>
        <div className="container">
          <TodoForm onFormSubmit={this.updateItems}/>
          <TodoList onRemoveItem={this.removeUpdate} items ={this.state.items}/>
        </div>
      </div>
    );
  }  
});

var TodoList = React.createClass({
  removeTodo : function(param){
    console.log("param",param);
    this.props.onRemoveItem(param)
  },
  render: function() {
    var createItem = function(itemText,i) {
      return (
        <TodoListItem onRemove={this.removeTodo} index={i} key={i}>{itemText}</TodoListItem>
      );
    };
    
    return(
      <ul id="staggered-test" className="collection with-header">
        <li className="collection-header">
          <h4>todo list</h4>
          {this.props.items.map(createItem)}
        </li>
        
      </ul>
    )
  }
});


var TodoListItem = React.createClass({
  remove : function(index){
    console.log(index);
    //this.props.onRemove(index);
  },
  render : function(){
    console.log(this.props);
    return(
      <li className="collection-item">
        <div>{this.props.children}
          <a href="" onClick={this.remove(this.props.index)} className="secondary-content">
            <i className="material-icons">delete</i>
          </a>
        </div>
      </li>
    )
  }
});

var TodoForm = React.createClass({

  getInitialState: function() {
    return {item: ''};
  },
  onChange: function(e){
    this.setState({
      item: e.target.value
    });
  },
  handleClick: function(e){
    console.log(this.state.item);
    e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({item: ''});
    //React.findDOMNode(this.refs.item).focus();
    return;
  },
  render : function(){
    return(
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s10">
              <input type="text" onChange={this.onChange} value={this.state.text} className="validate"/>
              <label for="name">Name</label>
            </div>
            <div className="input-field col s2">
              <a className="waves-effect waves-light btn" onClick={this.handleClick}>Add</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
});


React.render(<TodoApp/>,document.body);
