const request = require('request');
const geocode= require('geocode')
const weathercode = require('weathercode');
const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
geocode(address,(error,{longitude,latitude,locate})=>{
    if(error){
        return console.log("Error",error);
    }
    weathercode(longitude,latitude,(error,{current_temperature,feels_like})=>{
        if(error)
        {
            return console.log("error",error);
        }
        console.log('Location: ',locate);
        console.log("Current temperature: ",current_temperature);
        console.log("feels like temperature: ",feels_like);

    })
})
}
