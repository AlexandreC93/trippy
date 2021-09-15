import React from 'react'
import {Link} from "react-router-dom";


export default function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                </ul>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><Link to="/hotels">Hotels</Link></li>
                    <li><Link to="/hotel">Hotel Page</Link></li>
                    <li><Link to="*">Error 404</Link></li> */}
            </nav>
        </div>
    )
}
