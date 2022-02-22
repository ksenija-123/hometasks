let AmountOfFizzBuzz = parseInt(prompt("Enter the amount of Fizzbuzz you want"));

let val1 = 1

for (let number = 1; val1 < AmountOfFizzBuzz + 1; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
        alert("fizbuzz nr." + String(val1) + "=" + String(number));
        val1++
    }
}