import React from 'react';
import UserItem from './UserItem'

class UserList extends React.Component{

    render(props) {
        return(
            <div>
                {props.users.map((user) => {
                    <UserList user ={user} />
                })}
            </div>
        )
    }
}

export default UserList;