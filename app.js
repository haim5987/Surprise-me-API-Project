const express = require('express');

const app = express();
const service = require('./servieces')
const object = require('./objects')

//Counter variable for api requests statistics
var globalCounter = 0


//Surprise get method, response with random suprise object 
//dependent on the user's query parameters.
app.get('/api/surprise', (req, res) => {
    try{
        service.validate(req.query)
        if (service.error) throw Error(service.error);
        var obj = service.getRandomObj(req.query, object.objList)
        res.status(200).json({
            type: obj.getType(),
            result: obj.getResult()
        });
        globalCounter++
    }
    catch(e){
        res.status(400).json({ "Error Message" : "Invalid Arguments" });
    }
})

//Stats get method, response with statistics represent the number of requests 
//and the distribution for any object
app.get('/api/stats', (req, res) => {
    res.status(200).json({
        requests: globalCounter,
        distribution: service.getDistributionList(object.objList)})
})


app.listen(3000, () => {
    console.log("Server listening on port 3000");
})