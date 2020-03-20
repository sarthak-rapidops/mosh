const express = require('express')
const app = express();

app.get('/', (req, res)=> {
    res.send("hello");
})

app.get('/api/courses', (req, res)=> {
    res.send([1,2,3])
})

app.get('/api/courses/:id', (req, res)=> {
    res.send(req.params.id);
}) 

// pass mutiple parameter in url
app.get('/api/courses/:year/:month', (req, res)=> {
    res.send(req.params); // print{"year":"argu that you pass","month": "argu"}
})

 
const port = process.env.PORT || 3000
app.listen(port,  ()=>{
    console.log(`listening on ${port}`);
})


