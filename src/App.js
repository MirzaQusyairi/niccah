import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home/Home'
import User from './pages/User/User'
import Admin from './pages/Admin/Admin'
import PageNotFound from './pages/NotFound/NotFound'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" exact element={<Home />} />
          <Route path="login" exact element={<Login />} />
          <Route path="register" exact element={<Register />} />
          <Route path="dashboard/user/:id" exact element={<User />} />
          <Route path="dashboard/admin" exact element={<Admin />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
