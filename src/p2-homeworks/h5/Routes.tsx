import React from 'react'
import {Route, Routes, useNavigate, useParams, Navigate} from 'react-router-dom'
import Error404 from './pages/Error404';
import PreJunior from "./pages/PreJunior";
import PreJuniorPlus from "./pages/PreJuniorPlus";


const Profile = () => {
    const navigate = useNavigate()

    return (
        <div>
            Profile
            <button onClick={() => {
                navigate("/login")
            }}>logout</button>
            <button onClick={()=>{navigate("/login")}}>login</button>
        </div>
    )
}


const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => {
                navigate(-1)
            }}>backword
            </button>
        </div>
    );
};


export default function MyRoutes() {
    return (
        <div>
            <Routes>
                <Route path={"/*"} element={<Error404/>}/>
                <Route path={'/pre-junior'} element={<PreJunior/>}/>
                <Route path={'/pre-junior-plus'} element={<PreJuniorPlus/>}/>
                <Route path={"/param"} element={<Profile/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </Routes>
        </div>
    )
}


