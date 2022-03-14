// let opeartion

// $("h1").html();

// $("1").click(function() {
//     alert("Hi! I'm an alert");
// });

// $("#boxed").css("background-color", "red");

// let number = 
let btnnr = 0;
let number1;
let operator;
let btnoperator;
let number2;
let answer;

function show(btnnr) {
    if (number1 === undefined || number1 === 0) {
        number1 = btnnr;
        document.getElementById("boxed").innerHTML = number1;
    } else if (operator === undefined) {
        number1 = number1.toString() + btnnr.toString();
        document.getElementById("boxed").innerHTML = number1;
    } else if (number2 === undefined || number2 === 0) {
        number2 = btnnr;
        document.getElementById("boxed").innerHTML = number2;
    } else {
        number2 = number2.toString() + btnnr.toString();
        document.getElementById("boxed").innerHTML = number2;
    }
};

function operation(btnoperator) {
    if (number1 === undefined) {} else {
        operator = btnoperator
    }
}

function result() {
    switch (operator) {
        case "+":
            answer = parseFloat(number1) + parseFloat(number2);
            break;
        case "-":
            answer = parseFloat(number1) - parseFloat(number2);
            break;
        case "/":
            answer = parseFloat(number1) / parseFloat(number2);
            break;
        case "*":
            answer = parseFloat(number1) * parseFloat(number2);
            break;
    }
    document.getElementById("boxed").innerHTML = parseFloat(answer).toFixed(4);
}

function clearall() {
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    document.getElementById("boxed").innerHTML = 0;
}

function back() {
    if (number2 === undefined) {
        if (number1.length > 1) {
            number1 = number1.slice(0, -1);
            document.getElementById("boxed").innerHTML = number1;
        } else {
            number1 = 0;
            document.getElementById("boxed").innerHTML = number1;
        }
    } else {
        if (number2.length > 1) {
            number2 = number2.slice(0, -1);
            document.getElementById("boxed").innerHTML = number2;
        } else {
            number2 = 0;
            document.getElementById("boxed").innerHTML = number2;
        }
    }
}