import React from 'react';
import { useSelector } from 'react-redux';

const UserList = () => {
    const users = useSelector((state) => state.users);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age} years old, from {user.country}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
