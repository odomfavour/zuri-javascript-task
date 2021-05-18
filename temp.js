// let f = 0;
// let c = (f - 32) *  5/9;

// c = (0 - 32) * 5/9
// console.log(c.toFixed(4))

function convertFahrToCelsius(fahrenheit) {
    
    let f =  fahrenheit;
    
    // if(typeof)
    console.log(typeof f)
    if(typeof f === 'string' || typeof f === 'number'){
        let c = (f - 32) *  5/9;
        console.log(c.toFixed(4))
    }else {
        if(typeof f === 'object') {
            if(Array.isArray(f)) {
                console.log( `${f} is not a valid number but an array.`)
            }else {
                let output = JSON.stringify(f)
                console.log( `${output} is not a valid number but an array.`)
            }
            
        }
        
    }
    
}

// convertFahrToCelsius(0)
convertFahrToCelsius('0')
// convertFahrToCelsius([1,2,3])
// convertFahrToCelsius({temp: 0})
