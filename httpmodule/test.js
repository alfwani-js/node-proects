const ian = require('axios');

ian.get("www.google.com")
    .then((response) => {
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
        console.log("thi is hideous my guy ")
    })
    .then(()=>{
        console.log("ian you are getting this")
    });