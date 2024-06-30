document.getElementById("colorButton").addEventListener("click", function() {
    this.style.backgroundColor = this.style.backgroundColor === "blue" ? "green" : "blue";
});
document.getElementById("greetButton").addEventListener("click", function() {
    let currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    alert(greeting);
});
document.getElementById("calculateButton").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;

    document.getElementById("result").innerText = "Result: " + result;
});