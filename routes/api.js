const router = require("express").Router();

const Meteo = require("../models/Forecast");//model

router.get('/api/meteo', async (req, res) => {
    const name = req.query.name;
    const temp = req.query.temp;
    const newMeteoData = new Meteo({ name, temp });
    const datOk = await newMeteoData.save();
      
    if(datOk)
        res.status(200).send();
    else
        res.status(400).send();
});
module.exports = router;