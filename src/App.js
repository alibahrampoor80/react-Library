import React from "react";
import './App.css'

import {NavLink, Outlet} from "react-router-dom";

const activeLink = {
    padding: '5px',
    margin: '5px',
    borderRadius: '10px',
    color:'#fff'
}
const App = () => {
    return <>
        <div className="App">
            <h1>کتابخانه من</h1>

            <nav style={{borderBottom: '1px solid', paddingBottom: '20px'}}>
                <NavLink to={'/books'} className={({isActive}) => (isActive ? 'text-white btn btn-success ' : 'btn btn-warning')}>کتاب ها</NavLink>
                {" "}
                <NavLink to={'/about'} className={({isActive}) => (isActive ? 'text-white btn btn-success btn' : 'btn btn-warning')}>درباره ما</NavLink>
            </nav>
        </div>
        <Outlet/>


    </>
}
export default App