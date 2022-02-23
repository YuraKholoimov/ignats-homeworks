import React from 'react'
import Header from './Header'
import MyRoutes from './Routes'
import {HashRouter} from "react-router-dom";

export default function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <MyRoutes/>
            </HashRouter>
        </div>
    )
}