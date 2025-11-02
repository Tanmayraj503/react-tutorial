import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/usercontext';

function Profile(){
    const {user} = useContext(UserContext);

    if (!user) return <div>please login</div>

    return <p>Welcome back {user.username}</p>
}
export default Profile;