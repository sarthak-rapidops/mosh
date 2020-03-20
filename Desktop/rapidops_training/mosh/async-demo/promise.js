const p = new Promise((resolve, reject)=>{
    // some asyc work
    setTimeout(()=>{
        //resolve(1);
        reject(new Error("Error message"));
    },2000);
    
});
p.then(result =>console.log(result))
.catch(err => console.log(err.message))