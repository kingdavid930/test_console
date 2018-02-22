console.log(6===4 + 2);


console.log(6===add(2,4))

function add (num1,  num2){
  return (num1 + num2)
}

console.log(8===subtract(12,4))

function subtract (num1, num2){
    return (num1 - num2)
}

console.log(8===multiply(2,4))

function multiply (num1,num2){
    return (num1 * num2)
}

console.log(6===divide(12,2))

function divide (num1,num2){
    return (num1 / num2)
}

function assert (expected, actual, message){
    if (expected===actual){
        return true
    }
    else {
        console.log(message)

    }


}

assert(10, multiply(5,5),"not true")




function assert(expected, actual, message){
    if (expected===actual){
        return true

    }
    else {
        console.log(message)
    }
}

assert(12, multiply(2,4),"the statement is false")


}





