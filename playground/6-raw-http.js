const http = require('http')

const url = "http://api.weatherstack.com/current?access_key=c65324314de2f60b69d8a6e47a8f8b8d&query=45,-75&units=f"

const request = http.request(url, (response) =>{
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', ()=>{
    console.log('An error', error)
})
request.end()
