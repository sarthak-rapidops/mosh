async function displayRepo() {
    try {
        const user = await getuser1(1);
        const repo = await getRepo1(user.name)
        console.log(repo);
    } catch(err) {
        console.log(err.message);
    }
    
}
 displayRepo();
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
            //resolve(["repo1", "repo2", "repo3"])
            reject(new Error("could not get the repositries"))
        },2000)
    })
}  
