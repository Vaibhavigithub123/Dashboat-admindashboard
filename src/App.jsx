import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Topbar from './Layout/Topbar/Topbar.jsx'
import Dashboard from './pages/Dashboard/Dashboard'
import Analytics from './pages/Analytics/Analytics'
import Calendar from './pages/Calendar/Calendar'
import KanbanBoard from './pages/KanbanBoard/KanbanBoard'
import Users from './pages/Users/Users'
import UserUpdate from './pages/Users/UserUpdate'
import Products from './pages/Products/Products'
import NewUser from './pages/Users/NewUser'
import ProductUpdate from './pages/Products/ProductUpdate'
import NewProduct from './pages/Products/NewProduct'


function App() {
 
  return (
    <>
    <BrowserRouter>
      
    <Routes>
      {/* Topbar is default layout containing all routes pages */}
      <Route path='/' element={<Topbar/>}>
      
          <Route path="/dashboard" element={<Dashboard/>}/>
      
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/user/:userId" element={<UserUpdate/>}/>
          <Route path="/newuser" element={<NewUser/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/product/:productId" element={<ProductUpdate/>}/>
          <Route path="/newproduct" element={<NewProduct/>}/>
          <Route path="/board" element={<KanbanBoard/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
