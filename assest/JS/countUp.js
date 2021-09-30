var numbers = document.querySelectorAll('.number')

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

function callbackfunc() {
    for (var i = 0; i < numbers.length; i++) {
        if (isElementInViewport(numbers[i])) {
            if (numbers[0].textContent == 0) {
                animateNumber(92, 6000, 0, function(number) {
                    const formattedNumber = number.toLocaleString()
                    numbers[0].innerText = formattedNumber
                })
            }
            if (numbers[1].textContent == 0) {
                animateNumber(60, 3000, 0, function(number) {
                    const formattedNumber = number.toLocaleString()
                    numbers[1].innerText = formattedNumber
                })
            }
            if (numbers[2].textContent == 0) {
                animateNumber(7, 500, 0, function(number) {
                    const formattedNumber = number.toLocaleString()
                    numbers[2].innerText = formattedNumber
                })
            }
        }
    }
}
window.addEventListener("scroll", callbackfunc)
window.addEventListener("load", callbackfunc)

let n = 0

function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)

    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            let inc = Math.ceil(finalNumber / (duration / 17))
            if (currentNumber + inc > finalNumber) {
                currentNumber = finalNumber
                clearInterval(interval)
            } else {
                currentNumber += inc
            }
            callback(currentNumber)
        }
    }
}

