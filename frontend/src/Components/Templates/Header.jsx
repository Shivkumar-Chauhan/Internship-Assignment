import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../Styles/Templates/header.scss'
function Header() {
    return (
        <>
            <header>
                <NavLink to="/">
                    <div>
                        <h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 80V128C448 172.2 347.7 208 224 208C100.3 208 0 172.2 0 128V80C0 35.82 100.3 0 224 0C347.7 0 448 35.82 448 80zM393.2 214.7C413.1 207.3 433.1 197.8 448 186.1V288C448 332.2 347.7 368 224 368C100.3 368 0 332.2 0 288V186.1C14.93 197.8 34.02 207.3 54.85 214.7C99.66 230.7 159.5 240 224 240C288.5 240 348.3 230.7 393.2 214.7V214.7zM54.85 374.7C99.66 390.7 159.5 400 224 400C288.5 400 348.3 390.7 393.2 374.7C413.1 367.3 433.1 357.8 448 346.1V432C448 476.2 347.7 512 224 512C100.3 512 0 476.2 0 432V346.1C14.93 357.8 34.02 367.3 54.85 374.7z" /></svg>Covid-20 Statistics</h1>
                        <p>Data is available until December 2020 </p>
                    </div>
                </NavLink>
                <nav>
                    <NavLink to="/graphs">Graphs</NavLink>
                </nav>


            </header>
            <hr />
        </>
    )
}

export default Header