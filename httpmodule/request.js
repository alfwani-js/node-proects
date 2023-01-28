const axios = require('axios');

//promise based syntax

axios.get('https://www.google.com')
   .then((response)=>{
    console.log(response);
   })
   //to caught an error
   .catch((err)=>{
    console.log(err)
   })
   .then(()=>{
    console.log("all done makale")
   });