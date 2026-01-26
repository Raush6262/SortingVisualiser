console.log("connected");
let array = [];
let n;

function start() {
    n = Number(document.getElementById("inputnum").value);
    if (n > 0) {
        createArray();
        renderBars();
    }
    else {
        alert("error ");
    }
}

function createArray() {
    array = [];
    for (let a = 0; a < n; a++) {
        array.push(Math.floor(Math.random() * 100));
    }
}

function renderBars() {
    document.getElementById("array-container").innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        var bar = document.createElement('div');
        bar.id = 'bar' + i;
        bar.className = 'blocks';
        document.getElementById('array-container').appendChild(bar);
        bar.style.height = (array[i] + '%');
        bar.style.width = (1 / n + '%');
        bar.style.borderWidth = getRandomColor();
    }
}



let steps = [];
function bubblesort() {
    let len = array.length;
    while (len > 0) {
        let temp = 0;
        while (temp < len - 1) {
            steps.push(["compare", temp, temp + 1]);
            if (array[temp] > array[temp + 1]) {
                steps.push(["swap", temp, temp + 1]);
                [array[temp], array[temp + 1]] = [array[temp + 1], array[temp]];
            }
            temp++;
        }
        len--;
    }
    animateArray(0);
}

function animateArray(i) {
    if (i < steps.length) {
        let first = document.getElementById("bar" + steps[i][1]);
        let second = document.getElementById("bar" + steps[i][2]);
        first.style.borderWidth = '5px';
        second.style.borderWidth = '5px';
        if (steps[i][0] === "swap") {
            swap(i);
        }

        first.style.borderWidth = '2px';
        second.style.borderWidth = '2px';

        setTimeout(function () {
            animateArray(i + 1);
        }, 500);
    }
}

function swap(i) {
    {
        first.style.backgroundColor = "Red";
        second.style.backgroundColor = "Purple";
        let temp = first.style.height;
        first.style.height = second.style.height;
        second.style.height = temp;
    }
}