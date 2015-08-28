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
  render: function(){
    return(
      <div>
        <TodoNavBar/>
        <div className="container">
          <TodoForm onFormSubmit={this.updateItems}/>
          <TodoList items={this.state.items}/>
        </div>
      </div>
    );
  }  
});

var TodoList = React.createClass({
  remove : function(){
    console.log('remove from here:',this.props.items);

  },
  render: function() {
    var createItem = function(itemText,i) {
      return (
        <TodoListItem onDelete={this.remove} index={i} key={i}>{itemText}</TodoListItem>
      );
    };
    
    return(
      <ul id="staggered-test" className="collection with-header">
        <li className="collection-header">
          <h4>todo list</h4>
          {this.props.items.map(createItem,this)}
        </li>
        
      </ul>
    )
  }
});


var TodoListItem = React.createClass({
  render : function(){
    return(
      <li className="collection-item">
        <div>{this.props.children}
          <a onClick={this.props.onDelete} href="#" className="secondary-content">
            <i className="material-icons">delete</i>
          </a>
        </div>
      </li>
    )
  }
});

var TodoForm = React.createClass({

  getInitialState: function() {
    return {text: ''};
  },
  onChange: function(e){
    this.setState({
      text: e.target.value
    });
  },
  handleClick: function(e){
    //console.log(this.state.text);
    e.preventDefault();
    this.props.onFormSubmit(this.state.text);
    this.setState({text: ''});
    React.findDOMNode(this.refs.input).focus();
    return;
  },
  render : function(){
    return(
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s10">
              <input type="text" ref="input" onChange={this.onChange} value={this.state.text} className="validate"/>
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
