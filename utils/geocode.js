const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2hlcmxvY2syNTA1IiwiYSI6ImNrNTU3NmJ2cTByYXMzbG53ajY4bmZzbXMifQ.4VehHJGrV-A1nGoIKnDtzA'

    request({url, json:true}, (error,{body}) => {
        if(error){
            console.log('Unable to connect to location services',undefined)
        }else if(body.features.length === 0){
            callback('Unable to find the location',undefined)
        }else{
            callback(undefined,{
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                place: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode