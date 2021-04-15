import './App.css';
import React from "react";
import UserForm from "./Component/UserForm";
import UserItem from "./Component/UserItem"
/*import UserList from "./Component/UserList"*/

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      //using an empty array so that the users can be updated here
      user: []

    }
  }

  //function that will contains the list of users (using arrow))
  addUser = (user) => {
    this.setState({
      users: [...this.state.user, user] //each user is using array
    })
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-6">
          <UserForm addUser={this.addUser} />
        </div>

        <div className="col-md-6">
          <UserItem user={this.state.user}/>
        </div>
        
      </div>

    );
  }

}

export default App;
