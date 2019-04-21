# express-msisdn v1.0.0

This library/middleware exported as Node.js modules.

Installation

Using npm : 
$ npm i -g npm
$ npm i express-msisdn

In Node.js : 

const express = require('express')
const app = express()
const msisdn = require('express-msisdn);

// add msisdn middleware
app.use(msisdn());
const port = 3000

app.get('/', (req, res) =>{ 
    res.send('Msisdn : ' + req.msisdn);
})

app.listen(port, () => console.log(`Msisdn example app listening on port ${port}!`));



**Caution: We are matching the following headers :

 'X-MSISDN',
 'X_MSISDN',
 'HTTP_X_MSISDN',
 'X-UP-CALLING-LINE-ID',
 'X_UP_CALLING_LINE_ID',
 'HTTP_X_UP_CALLING_LINE_ID',
'X_WAP_NETWORK_CLIENT_MSISDN'

So be sure about header before using it.

**Solution : U can add custom header as follow :
app.use(msisdn(['YOUR_CUSTOM_HEADER']));


