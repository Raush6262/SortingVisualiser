console.log("connected");
let array = [];
let steps = [];
let n;
let isanimating = false;
let currspeed=100;

function fullreset() {
    array = [];
    document.getElementById("array-container").innerHTML = "";
    steps = [];
    isanimating=false;
    currspeed=100;
}

function reset() {
    steps = [];
}

function start() {
    if (isanimating == false) {
        isanimating = true;
        array = [];
        document.getElementById("array-container").innerHTML = "";
        reset();
        n = Number(document.getElementById("inputnum").value);
        if (n > 0) {
            console.log("n is " + n);
            createArray();
            console.log("Array created ");
            renderBars();
        }
        else {
            alert("error ");
        }
        isanimating = false;
    }

}

function createArray() {
    for (let a = 0; a < n; a++) {
        array.push(Math.floor(Math.random() * 100));
    }
}

function renderBars() {
    console.log("Redering started ");
    for (let i = 0; i < array.length; i++) {
        var bar = document.createElement('div');
        bar.id = 'bar' + i;
        bar.className = 'blocks';
        document.getElementById('array-container').appendChild(bar);
        bar.style.height = (array[i] + '%');
        bar.style.width = (1 / n * 100 + '%');
        bar.style.borderWidth = "2px";
        bar.style.borderColor = "Black";
        bar.style.borderStyle = "Solid";
        bar.style.backgroundColor = "blue";
    }
    console.log("redering done ");
}

function bubblesort() {
    if (isanimating == false) {
        reset();
        currspeed=document.getElementById("speedSlider").value;
        console.log("speed is "+currspeed);
        isanimating = true;
        console.log("sorting ");
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
        console.log("sorted ");
        console.log(steps);
        animateArray(0);
    }
}

function animateArray(i) {
    if (i < steps.length) {
        let first = document.getElementById("bar" + steps[i][1]);
        let second = document.getElementById("bar" + steps[i][2]);
        first.style.borderWidth = '5px';
        second.style.borderWidth = '5px';
        if (steps[i][0] === "swap") {
            swap(first, second);
        }

        setTimeout(function () {
            first.style.borderWidth = '2px';
            second.style.borderWidth = '2px';
            first.style.backgroundColor = "blue";
            second.style.backgroundColor = "blue";
            animateArray(i + 1);
        }, currspeed);
    }
    if (i == steps.length) {
        isanimating = false;
    }
}

function selectionsort(){
    if(isanimating==false){
        isanimating=true;
        reset();
        currspeed=document.getElementById("speedSlider").value;
        for(let i=0;i<array.length;i++){
            let minimum=i;
            for(let j=i+1;j<array.length;j++){
                steps.push(['compare',j,minimum]);
                if(array[j]<array[minimum]){
                    minimum=j;
                }
            }
            steps.push(["swap",i,minimum]);
            [array[minimum],array[i]]=[array[i],array[minimum]];
        }
        animateArray(0);
    }
}

function insertionsort(){
    if(isanimating==false){
        reset();
        isanimating=true;
        for(let i=0;i<array.length-1;i++){
            for(let j=i+1;j>0;j--){
                steps.push(["compare",j,j-1]);
                if(array[j]<array[j-1]){
                    steps.push(["swap",j,j-1]);
                    [array[j],array[j-1]]=[array[j-1],array[j]];
                }
                else{
                    break;
                }
            }
        }
        animateArray(0);
    }
}
function swap(first, second) {
    {
        first.style.backgroundColor = "Red";
        second.style.backgroundColor = "Purple";
        let temp = first.style.height;
        first.style.height = second.style.height;
        second.style.height = temp;

    }
}

