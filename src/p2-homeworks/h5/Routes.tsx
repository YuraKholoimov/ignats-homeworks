import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Error404 from './pages/Error404';
import PreJunior from "./pages/PreJunior";
import PreJuniorPlus from "./pages/PreJuniorPlus";


export default function MyRoutes() {
    return (
        <div>
            <Routes>
                <Route path={'pre-junior'} element={<PreJunior/>}/>
                <Route path={'pre-junior-plus'} element={<PreJuniorPlus/>}/>
                <Route path={"*"} element={<Error404/>}/>
            </Routes>
        </div>
    )
}


