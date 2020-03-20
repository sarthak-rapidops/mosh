const express = require('express')
const Joi = require('joi')
const app = express(); 
app.use(express.json()); // return the piece of middleware and then we call app.use to use that middleware on reprocessing pipeline(use to read request)
const courses = [
    {id:1,  name:"c"},
    {id:2,  name:"js"},
    {id:3,  name:"node"}
];

app.get('/api/courses', (req, res)=> {
    res.send(courses)
})
app.get('/api/courses/:id', (req, res)=> {
    const boolean = courses.find(bool =>bool.id === parseInt(req.params.id))
    if(!boolean) res.status(404).send("courses with given ID was not found")
    res.send(boolean);
})

 // handling post request
 app.post('/api/courses', (req, res)=>{
    const { error } = validateCourse(req.body) // equvivalent to result.error its called obejct destructoring
    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }
    const course={
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
}) 

 // put request
app.put('/api/courses/:id',(req, res)=>{
    // look up the course
    // if not existing return 404
        const course = courses.find(bool =>bool.id === parseInt(req.params.id))
        if(!course) res.status(404).send("courses with given ID was not found")

    //validate
    //if invalid, return 400-bad request
    const { error } = validateCourse(req.body) // equvivalent to result.error its called obejct destructoring
    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }
    //updata course
    course.name =req.body.name
    //return updated course
    res.send(course)
})

// delete request
app.delete('/api/courses/:id', (req, res)=>{
    //look up the course
    // not existing return 404
    const course = courses.find(c =>c.id === parseInt(req.params.id))
        if(!course) res.status(404).send("courses with given ID was not found")
    
    //delete
    const indexOfCourse = courses.indexOf(course)
    courses.splice(indexOfCourse, 1);

    //return the same course
    res.send(course)
});


function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema)
}
const port = process.env.PORT || 3100
app.listen(3100,  ()=>{
    console.log(`listening on ${port}`);
})