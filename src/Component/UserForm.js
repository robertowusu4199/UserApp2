import React from "react";

class UserForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            country: "",
            passcode: "",
        };
    }

    //calling the value of what is typed by user into the state
    handleOnChange = (event) => {
        this.setSate(
           { [event.target.name]: event.target.value } //getting the value for whatever was typed and puts it in the respective inputs
        )
    }

    handleSubmit = () => {
        this.props.adduser(this.state);
    }

    render() {
    return(
        <div>
            <form>

                <h1>SignUp Form</h1>
                <label>Username:</label>
                <br />
                <input className="inpu" type="text" name="username" placeholder="Username" value={this.state.username} onchange={this.handleOnChange}></input>

                <br />

                <label>Email:</label>
                <br />
                <input className="inpu" type="text" name="email" placeholder="Email" value={this.state.user} onChange={this.handleOnChange}></input>

                <br />

                <label>Country:</label>
                <br />
                <input className="inpu" type="text" name="country" vale={this.state.user} onchnage={this.handleOnChange}></input>

                <br />

                <label>Passcode:</label>
                <br />
                <input className="inpu" type="text" name="passcode" value={this.state.user} onChange={this.handleOnChange}></input>

                <br />
                <br />

                <button className="butt" type="button" onClick={this.handleSubmit}>Submit</button>


            </form>
        </div>
    )
    
    }
}




export default UserForm;