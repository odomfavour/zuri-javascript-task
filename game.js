function checkYuGiOh(n) {
    let replace;
    let box = [];
    if(typeof n === 'string') {
        return `invalid parameter: "${n}"`
    } else {
         for(let i = 1; i <= n; i++) {
        if((i % 2) == 0 && (i % 3) == 0 && (i % 5) == 0) {
            replace = "yu-gi-oh"
        } else if(i % 2 == 0 && i % 5 == 0) {
            replace = "yu-oh"
        }else if((i % 2) == 0 && (i % 3) == 0) {
            replace = "yu-gi"
        }else if((i % 3) == 0 && (i % 5) == 0) {
            replace = "gi-oh"
        }else if((i % 2) == 0 || (i % 3) == 0 || (i % 5) == 0) {
           if ((i % 2) == 0 ){
            replace = "yu"
            }else if ((i % 3) == 0){
                replace = "gi" 
            }else if ((i % 5) == 0){
                replace = "oh" 
            }
        }else {
            replace = i;
        }
        box.push(replace);
    }
    return box
    }
   
}



// console.log(checkYuGiOh(10))
// console.log(checkYuGiOh(100))
// console.log(checkYuGiOh(5))
console.log(checkYuGiOh("fizzbuzz is meh"))