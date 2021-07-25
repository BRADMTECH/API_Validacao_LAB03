const fdk = require('@fnproject/fdk');
const request = require('request');

fdk.handle(function (input) {

  var options = {
    'method': 'GET',
    'url': process.env.APIURL,
    'headers': {
    }
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    const parsedResponse = JSON.parse(response.body)
    console.log(parsedResponse)
    const apiStatus = parsedResponse.status
    console.log(apiStatus)
    if (!apiStatus) {
      console.log("Api Test: Fail")
      return false
    }
    console.log("Api Test: Success")
    return true
  });

})
