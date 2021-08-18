const fetch = require('node-fetch')
const fs = require('fs');
const { object } = require('joi');

class supriseObj{
    constructor(type, result){
        this.type = type
        this.result = result
        this.counter = 0
    }
    getType() {
        return this.type
    }
    getResult(){
        return this.result
    }
}

//This function read url, write it's value content to chuckQuoteText 
//file and return it as string variable
function chuckNorrisQuoteToStr(url){
    fetch(url).then(response => response.json()).then(data => {
        fs.writeFile("./chuckQuoteText", data.value, function(err) {
        if(err) { return console.log(err);}});
    });
    return fs.readFileSync("./chuckQuoteText", 'utf-8')
}

//This function read url, write it's quote content to kanyeQuoteText 
//file and return it as string variable
function kanyeQuoteToStr(url){
    fetch(url).then(response => response.json()).then(data => {
        fs.writeFile("./kanyeQuoteText", data.quote, function(err) {
        if(err) { return console.log(err);}});
    });
    return fs.readFileSync("./kanyeQuoteText", 'utf-8')
}

//This function convert every letter in given string to number between 1 to 26 
//and return the summation of the content
function convertToSum(str){
    str = str.toLowerCase();
    var sum = 0, i = 0
    const a = 97, z = 122
    while(i < str.length){
        if (str.charCodeAt(i) >= a && str.charCodeAt(i) <= z){
            sum += str.charCodeAt(i) - (a - 1)  
        }
        i++
    }
    return sum
}
exports.convert = convertToSum
exports.kanyeQuote = kanyeQuoteToStr
exports.chuckNorrisQuote = chuckNorrisQuoteToStr

var chuckNorrisJoke = new supriseObj("chuck-norris-joke", null)
var kanye = new supriseObj("kanye-quote", null)
var nameSum = new supriseObj("name-sum", null)

exports.objList = [chuckNorrisJoke, kanye, nameSum]