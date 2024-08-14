const express = require ('express');

const app = express();

const port = 3000;

const personasRouter = require ('./api/personas');

app.get("/" , function(req, res, next) {
    res.send("App express")
})
app.get("/a" , function(req, res, next) {
    res.send("otra ruta")
})
app.get("/test2" , function(req, res, next) {
    res.send("test2")
})

app.use('/api/personas', personasRouter);

app.listen (port, ( )=> {
    console.log(`Ejecutando servidor en puerto ${port}`);

})