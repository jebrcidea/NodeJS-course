const request = require("request")

const forecast = (latitude,longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=c65324314de2f60b69d8a6e47a8f8b8d&query="+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)+"&units=f"

    request({url, json: true}, (error, {body}) =>{
        if(error){
            callback("Unable to connect to weather service!", undefined)
        }else if(body.error){
            callback("Unable to find location", undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0]+". It is currently " + body.current.temperature +" degrees out. It feels like " + body.current.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast