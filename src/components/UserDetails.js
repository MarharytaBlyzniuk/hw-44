import React from 'react';
import { useSelector } from 'react-redux';

const UserDetails = ({ userId }) => {
    const user = useSelector((state) =>
        state.users.find((u) => u.id === userId)
    );

    if (!user) {
        return <p>User not found</p>;
    }

    return (
        <div>
            <h3>Details for {user.name}</h3>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Country: {user.country}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetails;
