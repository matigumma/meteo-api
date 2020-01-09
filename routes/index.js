const router = require("express").Router();
const Meteo = require("../models/Forecast");//model
/*
?name=NombreDeLaEstacion
&temp=[th0temp-act.1]
&hum=[th0hum-act.0]
&dewpoint=[th0dew-act.1]
&avgwind=[wind0avgwind-act.1]
&wind=[wind0wind-act.1]
&dirwind=[wind0dir-act.0]
&windgust=[wind0wind-max5.1]
&windchill=[wind0chill-act.1]
&hpa=[thb0seapress-act.1]
&rain=[rain0rate-act.1]
&solarRad=[sol0rad-act.0]
&uvindex=[uv0index-act.1]
*/
router.get('/', async (req, res) => {
    const name = req.param('name')
    const temp = req.param('temp')
    const hum = req.param('hum')
    const dewpoint = req.param('dewpoint')
    const avgwind = req.param('avgwind')
    const wind = req.param('wind')
    const dirwind = req.param('dirwind')
    const windgust = req.param('windgust')
    const windchill = req.param('windchill')
    const hpa = req.param('hpa')
    const rain = req.param('rain')
    const solarRad = req.param('solarRad')
    const uvindex = req.param('uvindex')

    const newMeteoData = new Meteo({ 
        name, 
        temp,
        hum,
        dewpoint,
        avgwind,
        wind,
        dirwind,
        windgust,
        windchill,
        hpa,
        rain,
        solarRad,
        uvindex
    });
    const datOk = await newMeteoData.save();
      
    if(datOk)
        res.status(200).send(datOk);
    else
        res.status(400).send();
});

module.exports = router;