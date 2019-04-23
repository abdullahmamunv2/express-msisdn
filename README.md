# express-msisdn
Find User's Msisdn number.(For more please visit https://en.wikipedia.org/wiki/MSISDN)
This library/middleware exported as Node.js modules.

## Installation

Using npm :
``` 
$ npm i -g npm
$ npm i express-msisdn
```

## In Node.js : 

```
const express = require('express')
const app = express()
const msisdn = require('express-msisdn');

// add msisdn middleware
app.use(msisdn());
const port = 3000

app.get('/', (req, res) =>{ 
    res.send('Msisdn : ' + req.msisdn);
})

app.listen(port, () => console.log(`Msisdn example app listening on port ${port}!`));
```


## Caution:
 1. You have to turn on mobile data instead of wifi.  
 2. This middlware search for following headers in http request :

 'X-MSISDN',
 'X_MSISDN',
 'HTTP_X_MSISDN',
 'X-UP-CALLING-LINE-ID',
 'X_UP_CALLING_LINE_ID',
 'HTTP_X_UP_CALLING_LINE_ID',
'X_WAP_NETWORK_CLIENT_MSISDN'

If u didn't find msisdn then contact with your mobile operator and ask for header and add this header in custom header array.. 

## Solution : 
U can add custom header as follow :
```
app.use(msisdn(['OPERATOR_CUSTOM_HEADER_1','OPERATOR_CUSTOM_HEADER_2']));
```


