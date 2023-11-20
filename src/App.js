import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoginForm from './pages/login/LoginForm';
import PostUserForm from './pages/createUser/PostUserForm';
import UserListTable from './pages/listUser/UserListTable';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/createUser" element={<PostUserForm/>}/>
      <Route path="/userList" element={<UserListTable/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
