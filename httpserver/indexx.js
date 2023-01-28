const http = require('http');

const PORT = 3000;

const friends = [
    {
        id:0,
        name:'ian alfwani'
    },
    {
        id:1,
        name:'makale alfwani'
    },
    {
        id:2,
        name:'ian makale'
    }
]

const server = http.createServer();
server.on('request',(req,res)=>{
    const items = req.url.split('/');
    if (req.method ==='POST' && items[1] === 'friends'){
       req.on('data',(data) => {
        const friend = data.toString();
        console.log('Request:', friend);
        friends.push(JSON.parse(friend));
         
       })
       req.pipe(res); 
      
    } else if (req.method === 'GET' && items[1] ==='friends'){
       // res.writeHead(200,{
        //'Content-Type':'application/json',
    //}); 
    //this is similarto the uppper function commented out
       res.statusCode=200;
       res.setHeader('content-Type','application/json');
      if(items.length === 3){
        const friendIndex = Number(items[2]);
         res.end(JSON.stringify(friends[friendIndex]));
       } else {
        res.end(JSON.stringify(friends));

       }     
     
    }else if(req.method === 'GET' && items[1] ==='messages'){
        res.setHeader('content-Type','text/html');
        res.write("<html>")
        res.write("<body>")
        res.write('<ul>')
        res.write('<li>hello makale</li>')
        res.write("<li>whats your view on being a developer</li>")
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        res.end("you will become a developer")

    } else{
        res.statusCode = 404;
        res.end();
    }

    
})

server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}....`)
});//127.0.0.1 =>localhost
