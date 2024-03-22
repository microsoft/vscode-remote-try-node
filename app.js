/*var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    res.writeHead(200, {'content-type':'text/html'});
    res.writeHead(200,{'content-type':'application/json'})
    var data = {
        id: 444,
        name: 'node.js'};
    if (req.url === '/'){
        //var html = fs.readFileSync('./plik.html','utf8');
        //var Header = 'Home page';
        //html = html.replace('{ Header }',Header);
        //res.end(html);

        res.writeHead(200);
        res.end(JSON.stringify(data));

    }else if(req.url === '/product'){
        res.writeHead(200);
        res.end('Products');
    }else if(req.url === '/blog'){
        res.writeHead(200);
        res.end('Blog');
    }else{
        res.writeHead(404);
        res.end('404 Not found');
    }
    /*
    
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify(data));
    
    fs.createReadStream('./plik.html').pipe(res);
    res.writeHead(200);
    res.end(html);
    
}).listen(3000);
console.log("Server on")*/


const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.use('/assets', express.static('public'))

app.get('/', function (req, res) {
  res.render('index', {query: req.query.id})
})
app.get('/contact',function(req,res){
    res.send('contact')
})
app.get('/product/:id',function(req,res){
    res.send('id: ' + req.params.id)
})
app.get('/other',function(req,res){
    res.send('other')
})
app.listen(3000);