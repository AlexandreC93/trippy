export const config = { host: "http://localhost:3002" }

export let city = []

export const getHomeData = async()=> {
    
   return await fetch(config.host + "/api/home")
        .then(res => res.json())
        .then(result => result.cities)
        // .then(result => {


        //     city = result.map((city)=>{
               
        //         return city
        //     })
        //     console.log(`result`, result)
            
        // })
        

        
        
    
}