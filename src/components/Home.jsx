import React, { useState, useEffect } from 'react'
import { config, getHomeData, city } from "../utils/Api"
import CityCard from './CityCard'

export default function Home() {
    const [cities, setCities] = useState([])
    
    
    
    
    
    useEffect(() => {
        
        
        getHomeData().then(res =>{
          
            setCities(res)
            console.log('res :>> ', res);
            
        })
        

       
    }, [])



    console.log('city :>> ', city);
    console.log('cities :>> ', cities);

    return (
        <div>
            <h1>Home</h1>
        <div id="card-list">
            { cities.length !== 0 &&
                cities.map(city => {

                    
                    
                   return  <CityCard name={city.name}
                            img={city.source} slug={city.slug}

                   />
                    
                        
                })
            }
            </div>
        </div>
    )
}
