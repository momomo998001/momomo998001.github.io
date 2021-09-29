const   countUp = document.querySelector('.countUp-client'),
        number = Number(countUp.innerHTML) + 1;

let counter = 0,
    delay = 1,
    x = number / 2,
    y = 0;

counter_js();

function counter_js(){
    y++;
    delay = (x-y);
    countUp.innerHTML = counter.toString();
    counter++;
    if (counter < number) {
        setTimeout(function(){
            counter_js();

        }, delay)
    }
}

const   countUp2 = document.querySelector('.countUp-talent'),
        number2 = Number(countUp2.innerHTML) + 1;

let counter2 = 0,
    delay2 = 1,
    x2 = number2 / 2,
    y2 = 0;

counter2_js();

function counter2_js(){
    y2++;
    delay2 = (x2-y2);
    countUp2.innerHTML = counter2.toString();
    counter2++;
    if (counter2 < number2) {
        setTimeout(function(){
            counter2_js();

        }, delay)
    }
}

const   countUp3 = document.querySelector('.countUp-year'),
        number3 = Number(countUp3.innerHTML) + 1;

let counter3 = 0,
    delay3 = 1,
    x3 = number3 / 2,
    y3 = 0;

counter3_js();

function counter3_js(){
    y3++;
    delay3 = (x3-y3);
    countUp3.innerHTML = counter3.toString();
    counter3++;
    if (counter3 < number3) {
        setTimeout(function(){
            counter3_js();

        }, delay)
    }
}