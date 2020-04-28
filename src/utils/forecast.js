const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const coords = latitude + "," + longitude;
    const url =
        "http://api.weatherstack.com/current?access_key=9c43838ab60b5c6bc76c0af0e0c47bfc&query=" +
        coords;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connector to weather service.");
        } else if (body.error) {
            callback("Unable to find location.");
        } else {
            callback(undefined,
                body.current.weather_descriptions[0] +
                '. It is currently ' + body.current.temperature +
                ' degrees out, but feels like ' + body.current.feelslike + '.' +
                ' Humidity is at ' + body.current.humidity + '%.'
            );
        }
    });
};

module.exports = forecast;
