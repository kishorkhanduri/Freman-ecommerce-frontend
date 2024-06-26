import { Route, Routes } from 'react-router-dom';
import './App.css'
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminPannel from './Admin/AdminPannel';


function App() {

  return (
    <>
        <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<AdminPannel />} />
        
      </Routes>
    </>
  )
}

export default App
