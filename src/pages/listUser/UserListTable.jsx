import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserListTableRow from './UserListTableRow.jsx'
import './userListTable.css'
import { ApiService } from '../../service'





const UserListTable = () => {
  const [userList, setUserList] = useState([{}])

  useEffect(() => {
   async function getUsers(){
    const users = await ApiService.getUsers()
    console.log(users)
    setUserList (users)
   }
   getUsers()
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th><h3>email</h3></th>
            <th><h3>avatar</h3></th>
          </tr>
        </thead>
        <tbody>
          {
            userList.length === 0 ? <tr><th colSpan='2'>'Sin datos'</th></tr> : userList.map(el => <UserListTableRow key={el.id} el={el} />)
          }
        </tbody>
      </table>
    </>
  )
}

export default UserListTable