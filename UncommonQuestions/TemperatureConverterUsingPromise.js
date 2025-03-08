//f = c * (9/5) + 32

const celceusToFarenheit = (c) =>{
    return new Promise((resolve,reject)=>{
        if(isNaN(c)){
            reject('Please Enter a valid celcius degree')
            return;
        }
        resolve(c * (9/5) + 32 )
    })
}

celceusToFarenheit(20)
.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log('Please Enter a valid Celcius degree')
})

//  68

// no need to use Math.floor

const farenheitToCelcius = (f) =>{
    return new Promise((resolve,reject)=>{
        if(isNaN(f)){
            reject(f)
            return;
        }
        resolve((f - 32) * (5/9))
    })
}

farenheitToCelcius(68).then(result=>{
    console.log(result)
}).catch(error=>{
    console.log('Please Enter a valid degree in farenheit')
})

//  20