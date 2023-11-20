import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'


// const Navbar = () => {
//     return (
//        <div className='container'>
//          <ul>
//             <li>
//                 <NavLink to='/'>Home</NavLink>
//             </li>
//             <li>
//                 <NavLink to='/login'>Login Form</NavLink>
//             </li>
//             <li>
//                 <NavLink to='/userList'>List users in a table</NavLink>
//             </li>
//             <li>
//                 <NavLink to='/createUser'>Create user using a Form</NavLink>
//             </li>
            
//         </ul>
//        </div>
//     )
// }

// export default Navbar

const Navbar = () => {
    return (
        <div className='container'>
            <ul>
                <li>
                    <NavLink to='/' className='NavLink'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/login' className='NavLink'>Login Form</NavLink>
                </li>
                <li>
                    <NavLink to='/userList' className='NavLink'>List users in a table</NavLink>
                </li>
                <li>
                    <NavLink to='/createUser' className='NavLink'>Create user using a Form</NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Navbar;