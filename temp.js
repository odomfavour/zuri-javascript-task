
function convertFahrToCelsius(fahrenheit) {
    
    let f =  fahrenheit;

    if(typeof f === 'string' || typeof f === 'number'){
        let c = (f - 32) *  5/9;
        return `${c.toFixed(4)}`
    }else {
        if(typeof f === 'object') {
            if(Array.isArray(f)) {
               return `[${f}] is not a valid number but an array.`
            }else {
                let output = JSON.stringify(f)
                return `${output} is not a valid number but an object.`
            }
            
        }
        
    }
    
}

// console.log(convertFahrToCelsius(0))
// console.log(convertFahrToCelsius('0'))
// console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({temp: 0}))
