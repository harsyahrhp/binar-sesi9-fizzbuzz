function fizzbuzz(number){
    let result;
    if(number % 3 == 0 && number % 5 == 0){
        result = 'fizzbuzz'
    }else if(number % 3 == 0){
        result = 'fizz'
    }else if(number % 5 == 0){
        result = 'buzz'
    }else{
        result = number
    }
    return result
}

const fizz1 = fizzbuzz(15)
console.log(fizz1)