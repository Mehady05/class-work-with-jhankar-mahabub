var result = addNumbers(3, 2, 5, 6, 8, 9);
function addNumbers(num1, num2) {
    // console.log(arguments);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
        
    }


    
    function logInfo(message) {
        console.log(message);
    }

    var say = logInfo("good morning");
    return sum;
}
console.log(result);