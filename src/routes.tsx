import { Routes, Route } from "react-router-dom";
import UserList from "./pages/Users/List";
import UsersCreate from "./pages/Users/Create";
import UserEdit from "./pages/Users/Edit";
import Dashboard from "./pages/Dashboard";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/users">
                <Route path="/users" element={<UserList />} />
                <Route path="/users/new" element={<UsersCreate />} /> 
                <Route path="/users:id" element={<UserEdit />} />  
            </Route>
        </Routes>
    )
}