// callbacks
console.log("before")
getuser(1,(user)=> { 
    console.log(user)
    getRepo(user.name, (repo)=>{
        console.log(repo)
    })
})
console.log("after")
function getuser(id, callback) {
    setTimeout(()=> {
        console.log("reading the user from a database")
        callback({id: id, name: "sarthak"})
    },2000)
}   
function getRepo (username, callback) {
    setTimeout(()=> {
        console.log("reading the user repositories")
        callback(["repo1", "repo2", "repo3"])
    },2000)
}
 // replacing callback with promises
  getuser1(1)
    .then(user => getRepo1(user.name))
    .then(repo => console.log(repo))
    .catch(err => console.log(err.message))


 function getuser1(id) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log("reading the user from a database")
            resolve({id: id, name: "sarthak"})
        },2000)
    });
    
}
function getRepo1(username) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log("reading the user repositories")
            resolve(["repo1", "repo2", "repo3"])
        },2000)
    })
}  
