const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/629fc55015451f7f8b0d3b27bda6ab04/'+encodeURIComponent(latitude)+","+encodeURIComponent(longitude)

    request({url, json:true}, (error,{body}) => {
        if(error){
            console.log('Unable to connect to location services',undefined)
        }else if(body.error){
            callback('Unable to find the location',undefined)
        }else{
            callback(undefined,body.daily.data[0].summary+ ' It is currently '+body.currently.temperature+' degrees out. There is a '+body.currently.precipProbability+' % chance of rain.')
        }
    })
}

module.exports = forecast