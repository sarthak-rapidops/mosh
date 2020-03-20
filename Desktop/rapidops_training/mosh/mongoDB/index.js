const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sarthak:sarthak@cluster0-xwzkd.mongodb.net/rapidops?retryWrites=true&w=majority")
    .then(()=> console.log("connect to mongoDB"))
    .catch(err => console.log("could not connect to MongoDB", err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date : {type: Date, default: Date.now},
    isPublished: Boolean 
})
 // insert data into collection
const Course = mongoose.model("courses", courseSchema);
async function createCourse() {
    const course = new Course({
        name: 'Angular.js',
        author: 'Mosh',
        tags: ['angular','frontend'],
        isPublished: true
    })
    // save those data into a Document
    const result = await course.save();
    console.log(result);
}
async function getCourses() {
    const courses = await Course
    //.find( {author:"Mosh", tags: "node"} )
    // regular expression
    //1. start with mosh and to ignore case use i at the end
    .find({author: /^Mosh/i})
    //2. start with Hamedani
    .find({author: /Hamedani$/i})
    //3. contains mosh
    .find({author: /.*Mosh.*/i})
    .select({name: 1, tags: 1})
    console.log(courses)
}
 
//createCourse();
getCourses();


