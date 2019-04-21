var MSISDN_HEADER   =  [
    'X-MSISDN',
    'X_MSISDN',
    'HTTP_X_MSISDN',
    'X-UP-CALLING-LINE-ID',
    'X_UP_CALLING_LINE_ID',
    'HTTP_X_UP_CALLING_LINE_ID',
    'X_WAP_NETWORK_CLIENT_MSISDN'
]

const msisdn = (customHeaders=[])=>{
    if(!Array.isArray(customHeaders)){
        throw new Error('Custom header list must be array of string.');
    }
    if(customHeaders.length>0){
        MSISDN_HEADER = MSISDN_HEADER.concat(customHeaders);
    }
    return (req,res,next)=>{
        for(var i=0;i<MSISDN_HEADER.length;i++){
            var header = headers[i].toLowerCase();
            if(req.headers.hasOwnProperty(header)){
                req.msisdn = req.headers[header];
                break;
            }
        }
    }
}

module.exports =  msisdn;