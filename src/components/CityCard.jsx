import React from 'react'
import {Link, BrowserRouter} from 'react-router-dom'

export default function CityCard(props) {
    return (
        <div id="card" style={{}}>
            <img className="img" src={"http://localhost:3002"+props.img} alt={props.name} />
            <h1>{props.name}</h1>

            <Link to={`/hotel/${props.slug}`}>Go here!</Link>
          
        </div>
    )
}


