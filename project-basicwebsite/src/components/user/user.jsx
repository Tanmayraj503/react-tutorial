import React from 'react'
import { useParams } from 'react-router-dom'

function User(){

    const {userid}= useParams();

    return (
        <p className='bg-gray-300 text-4xl font-bold text-black h-20 flex items-center justify-center'>User ID is: {userid}</p>
    )
}
export default User;