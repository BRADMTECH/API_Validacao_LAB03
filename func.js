const fdk = require('@fnproject/fdk');
const axios = require('axios');

fdk.handle(async function (input) {

  return await (async () => {
    try {
      const response = await axios.get(process.env.APIURL)
      console.log(response.data.status);
      if (!response.data.status) {
        console.log("Api Test: Fail")
        return false
      }
      console.log("Api Test: Success")
      return "Ola Devops ORACLE"
    }
    catch (error) {
      console.log(error.response.body);
    }
  })();

})
