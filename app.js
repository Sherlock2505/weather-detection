const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//const url = 'https://api.darksky.net/forecast/629fc55015451f7f8b0d3b27bda6ab04/37.8267,-122.4233?lang=ar'

// request({ url: url, json: true}, (error , response)=> {
//     const data = response.body
//    // console.log(data.currently)
// })


if(!process.argv[2]){
    console.log("Please provide valid input")
}

else{

    geocode(process.argv[2],(error,{latitude, longitude, place})=>{

        if(error){
            return console.log(error)
        }
    
        forecast(latitude, longitude, (error,forecastData)=>{
            if(error){
                return console.log(error)
            }
    
            console.log(place)
            console.log(forecastData)
            
        })
    
})
}
