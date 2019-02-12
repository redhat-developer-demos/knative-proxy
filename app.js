// app.js - A proxy for a Knative service.
// Necessary because XHRs can't call Knative services as far as I can tell.
// Written by Doug Tidwell, dtidwell@redhat.com 

// This code calls the overlay image function for Coderland. Given
// a JSON structure that contains base64-encoded image data and other
// values, it returns the base64-encoded version of an updated image
// that includes a message, a date stamp, and the Coderland logo.

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodeFetch = require('node-fetch');

// Set a limit of 5MB for the JSON data. Obviously a high-res camera
// could generate some really big files...this limit seems to work
// for us. 
app.use(bodyParser.json({limit: '5mb'}));

// Use port 8888 by default, but the environment variable if it's there
port = process.env.PORT || 8888;

// This implements the HTTP OPTIONS verb. Handles the CORS stuff.
// The client app calls OPTIONS first to get these headers, then
// it calls the POST method if the CORS bits work.
// Also notice that the Allow-Origin host is whoever asked us
// the question (req.header('Origin')). 
reassureTheClient = function(req, res) {
    res.header('Access-Control-Allow-Origin', req.header('Origin'));
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
}

// This implements the POST verb. 
modifyImage = function(req, res){
    console.log(`We\'re in the proxy: ${req.body.greeting}`);

    // We obviously need to know the URL of the service as well as
    // the value for the HOST header. If there's an environment
    // variable for these values, that's what we use; otherwise
    // we've got hardcoded values instead. 
    const url = process.env.PROXY_URL ||
          'http://192.168.99.100:31380/overlayImage';
    const headerValue = process.env.PROXY_HOST ||
          'overlayimage.knativetutorial.192.168.99.100.nip.io';
    
    nodeFetch(url, {
        timeout: 90000,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Host': headerValue
        },
        body: JSON.stringify({
            imageData: req.body.imageData,
            imageType: req.body.imageType,
            greeting: req.body.greeting,
            dateFormatString: req.body.dateFormatString,
            language: req.body.language,
            location: req.body.location
        }) 
    })

    // Handle the requests via promises here
    .then(response => response.json())
    .then((responseJson) => {
        res.set({'Access-Control-Allow-Origin': req.header('Origin'),
                 'Cache-Control': 'no-cache, no-store, must-revalidate'})
            .status(200)
            .json(responseJson);
    });
};

// Define the methods for the POST and OPTIONS verbs
app.route('/overlayImage')
    .post(modifyImage)
    .options(reassureTheClient);

app.listen(port);
console.log(`Knative proxy service running on port ${port}...`);
