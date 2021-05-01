const request = require('request');

const weathercode=(longitude,latitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=fdad38b6cb2e3d0f3ba3b29489ac0ac5&query='+latitude+','+longitude;
    request({url:url,json:true},(error,response)=>{
        if(error)
        {
            callback("unable to connect to weather services",undefined);
        }
        else if(response.body.error)
        {
            callback("unable to find location",undefined);
        }
        else{
            callback(undefined,{
                  place : response.body.location.name,
                   current_temperature : response.body.current.temperature,
                   feels_like:response.body.current.feelslike,
                   latitude:response.body.location.lat,
                   longitude:response.body.location.lon,
            });
        }
    });
};

module.exports=weathercode