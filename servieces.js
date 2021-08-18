const Joi = require('joi');
const object = require('./objects')

//Joi object in order to check the validity of the query parameters
const schema = Joi.object({
    name: Joi.string().required(),
    birth_year: Joi.number().integer().required(),
});

exports.validate = function(queryObj) {
    const validation = schema.validate(queryObj)
    if (validation.error)
        throw Error(validation.error);
}

//Return random between min (include) to max (exclude)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//This function create the distribution list from the given objects list and return it
exports.getDistributionList = function (objList){
    var statsList = []
    for (let i = 0; i < objList.length; i++){
        var cur = {
            type: objList[i].type,
            count: objList[i].counter
        }
        statsList.push(cur)
    }
    return statsList
}

//This function get valid query parameters object and list of objects 
//and return random object from the list, depenend on the queryObj conditions
exports.getRandomObj = function(queryObj, objList){
    var index = 0
    const chuck_valid = queryObj.birth_year <= 2000
    const kanye_valid = queryObj.birth_year > 2000 && !(queryObj.name[0] == 'A' || queryObj.name[0] == 'Z')
    const num_sum_valid = queryObj.name[0] != 'Q'
    while(true){
        index = getRndInteger(0, objList.length)
        if (index == 0 && chuck_valid){
            objList[index].result = object.chuckNorrisQuote("https://api.chucknorris.io/jokes/random")
            break;
        } 
        if (index == 1 && kanye_valid){
            objList[index].result = object.kanyeQuote("https://api.kanye.rest")
            break;
        }
        if (index == 2 && num_sum_valid){
            objList[index].result = object.convert(queryObj.name)
            break;
        } 
    }
    objList[index].counter++
    return objList[index]
}