let promiseChaining = (input)=>{

    return new Promise((resolve ,reject)=>{
     
        if(typeof(input) =="string")
          setTimeout(()=>{

        resolve(input)
     },3000)

    else{
        reject("seems like There's something wrong with the output")
    }
    })
}

promiseChaining("Im").then((receiveInput)=>{
    console.log(`${receiveInput} Mohammed`)
    return `${receiveInput} Mohammed`
})
.then((receiveInput)=>{
    console.log(`${receiveInput} Mohammed Asif`)

})