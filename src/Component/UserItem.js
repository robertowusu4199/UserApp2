import React from "react";

class UserItem extends React.Component {
    render() {
        return (
            <div>
                <h1>User List</h1>
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="use">Username</h4>
                        <p className="fb">Fab360</p>
                        {this.props.user.username}
                    </div>

                    <div className="col-md-2">
                        <h4 className="mail">Email</h4>
                        <p className="gm">Fabregas@hotmail.com</p>
                        {this.props.user.email}
                    </div>

                    <div className="col-md-3">
                        <h4 className="cou">Country</h4>
                        <p className="gh">Ghana</p>
                        {this.props.user.country}
                    </div>

                    <div className="col-md-4">
                        <h4 className="act">Action</h4>
                        <div className="button">
                            <button className="btn btn-success">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>

                    <div className="row">
                    <div className="col-md-3">
                        <h4 className="use">Username</h4>
                        <p className="fb">Fab360</p>
                        {this.props.user.username}
                    </div>

                    <div className="col-md-2">
                        <h4 className="mail">Email</h4>
                        <p className="gm">Pappy@hotmail.com</p>
                        {this.props.user.email}
                    </div>

                    <div className="col-md-3">
                        <h4 className="cou">Country</h4>
                        <p className="gh">Togo</p>
                        {this.props.user.country}
                    </div>

                    <div className="col-md-4">
                        <h4 className="act">Action</h4>
                        <div className="button">
                            <button className="btn btn-success">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default UserItem;