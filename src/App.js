import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import {Box} from "@mui/material"


import Login from "./pages/login/Login"
import Dashboard from './components/dashboard/Dashboard';
import Account from './components/account/Account';


function App() {
  return (
    <Box>
      <BrowserRouter>
      <Routes>
      <Route index path="/" element={<Login />}/>
      <Route index path="/dashboard" element={<Dashboard />}/>
      <Route index path="/account" element={<Account />}/>
      </Routes>

      </BrowserRouter>

    </Box>
  );
}

export default App;
