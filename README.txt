=============================
    = Using Instructions =
=============================
Copy all the files in the zip file to folder. nevigate to this folder in your command line shell
and run 'node app'.
You will see 'Server listening on port 3000' message and then you can start using the app in port 3000
on your local host server.

=============================
    = Files description =
=============================
app.js - Main project file, while runing, listening on port 3000 (local host). responsible 
for api surprise and stats requests and response. require: npm express, servieces.js and objects.js

services.js - This file responsible for all the services app.js need in order to response with
appropriate staus and body codes. it has validity of query parameters function, distribution list maker
and random obj generator.

objects.js - This file responsible for objects storing and have thier own methods. It has class of surprise
object with type, result and internal counter. It also have the methods for represnting chuck norris quotes,
kanye west quotes and convert string to sum. this file exports the list with these objects.

=============================
        = Design =
=============================
I chosen to implemnt this project using 3 files in order to organize my code. every file is responsible 
for distinct implemntetions. In order to write the server, it's requests and response methods I used npm
express framework. I used npm Joi in order to check the existence and validity of the query parameters.
In objects file I built template class with type and result in order to make my project flexible and capable for
more objects in the future. To make new object you only need to create new instance of it in objects.js and push it
to the objects list. In order to make condition you need to write the condition in services getRandomObj function in 
the while loop with the index of the object in the list. To generate Kanye West and Chuck Norris quotes I 
fetch thier JSON API url using node-fetch and copy thier quotes to the files chuckQuoteText and kanyeQuoteText 
with npm fs. then, I return the quotes as strings and them to thier objects.


=============================
       = npm Packages =
=============================
node-fetch
fs
Joi
express

-author-
Haim Kasel