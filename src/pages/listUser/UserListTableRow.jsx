import React from 'react'
import './userListTableRow.css'
const UserListTableRow = ({el}) => {
    const {id,email,avatar} = el
    return (
        <>
            <tr>
                <td><h4>{email}</h4></td>
                <td><img src={avatar} alt="avatar1" /></td>
            </tr>
        </>
    )
}

export default UserListTableRow