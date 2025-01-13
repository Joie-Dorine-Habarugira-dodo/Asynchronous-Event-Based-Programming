function message(x){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(x===1){
            resolve('Success')
        }
        else{
            reject('Failure!')
        }
    }, 1000)
   
 })
}
message(0).then(mesg=>{
    console.log(mesg);
},
mesg=>{
    console.log(mesg)
}
)
