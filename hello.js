const http = require('http');
const { hostname } = require('os');

function generateFibonacci(number){
    var fibonacci = [];
    fibonacci[0]=0;
    fibonacci[1]=1;
    for ( var i = 2; i<number;i++){
        fibonacci[i]=fibonacci[i-2]+fibonacci[i-1];
    }
    return 
}


// const host= '127.0.0.1';
// const port= 8080;

// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plan');
//     res.end('Hello semilleros');
// });

// server.listen(port,hostname,() =>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// })