function abc(param) {
    try {
        return new Promise((resolve, reject) => {
            if (typeof param === "number") {
                setTimeout(function(){return resolve(param)}, 1000)
            } else if (typeof param === "string") {
                return reject("Parameter is a string");
            } else {
                return reject("Parameter is neither string nor number")
            }
        })
    } catch (e) {
        console.log(e);
    }
}

// var x = await abc("123");
abc({}).then((done)=>{
    console.log(done);
}).catch((e)=> {
    console.log(e);
});