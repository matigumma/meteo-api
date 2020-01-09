const mongoose = require("mongoose");

//mongoose.connect('mongodb+srv://mongo_freewaves:UsjQDN3WT7dpxSCZ@cluster0fw-alobx.mongodb.net/meteo?retryWrites=true&w=majority',{
mongoose.connect('mongodb://mongometeo:28017/meteo',{
    autoReconnect: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('mogno conectado'))
    .catch(err => console.log('hubo un error al conectar'));