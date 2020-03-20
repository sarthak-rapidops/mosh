const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sarthak:sarthak@cluster0-xwzkd.mongodb.net/rapidops?retryWrites=true&w=majority")
    .then(()=> console.log("connect to mongoDB"))
    .catch(err => console.log("could not connect to MongoDB", err))


    const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [ String ],
        date : {type: Date, default: Date.now},
        isPublished: Boolean ,
        price : Number
    })

    const Exercise = mongoose.model("exercise", courseSchema, "exercise");
    async function getDetails() {
     //return await Course()    
    /* const exercise1 = await Exercise
    .find( {"isPublished": true, "tags": "backend"} )
    .sort( {name: 1 })
    .select( {name: 1, author: 1}) */
    
    const exercise2 = await Exercise
    .find({"isPublished": true, "tags": {$in:["backend", "frontend"]}})
    .sort( {price: -1})
    .select( {name: 1, author: 1, price: 1})
    console.log(exercise2)
    //console.log(exercise1) 


}
/* async function exercise2(){
    retune await cour
} */
/* async function run(){
    
    const courses = await getDetails();
    console.log(courses)
}
run() */

 getDetails()