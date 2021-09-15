const config = {host: "http://localhost:3002"}

function getHomeData(){
    fetch(config.host +"/api/home")
    .then(res => res.json())
}