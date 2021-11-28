$('.message .close')
    .on('click', function () {
        $(this)
            .closest('.message')
            .transition('fade')
            ;
    });

// Init AOS
function aos_init() {
    AOS.init({
        duration: 1000,
        once: true
    });
}
$(window).on('load', function () {
    aos_init();
});

function lab1() {
    window.open("https://distracted-liskov-780ee8.netlify.app/");
}
function lab2() {
    window.open("https://distracted-liskov-780ee8.netlify.app/test.html")
}
function lab4() {
    window.open("home");
}
function lab5() {
    window.open("form");
}
function lab3() {
    window.open("list");
}
function lab6() {
    window.open("lab6")
}

// MY CALULATOR
function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

function SUBTRACTBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 - num2;
}
function AddBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = Number(num1) + Number(num2);
}

function fact() {
    n = document.getElementById("firstNumber").value;
    if (n < 0) {
        document.getElementById("result").innerHTML = 'Error! Factorial for negative number does not exist.';
    }
    else if (number === 0) {
        document.getElementById("result").innerHTML = 'Factorial of 0 is = 1';

    }
    else {
        let fact = 1;
        for (var i = 1; i <= number; i++) {
            fact *= i;
        }
        document.getElementById("result").innerHTML = `The factorial of ${n} is ${fact}.`;

    }
}