console.log("connected");
let array = [];
let steps = [];
let n;
let isanimating = false;
let currspeed = 100;

function fullreset() {
    array = [];
    document.getElementById("array-container").innerHTML = "";
    steps = [];
    isanimating = false;
    currspeed = 100;
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
        currspeed = document.getElementById("speedSlider").value;
        console.log("speed is " + currspeed);
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

function animateArrayMerge(i) {
    if (i < steps.length) {
        let index = document.getElementById("bar" + steps[i][1]);
        console.log("working on " + index.id);
        index.style.borderWidth = '5px';
        if (steps[i][0] == "tomerge") {
            index.style.backgroundColor = "yellow";
        }
        else if(steps[i][0]=="update"){
            index.style.backgroundColor = "orange";
            index.style.height = steps[i][2]+"%";
        }
        else{
            index.style.backgroundColor = "blue";
        }
        setTimeout(function () {
            console.log(index.id + " to update ");
            index.style.borderWidth = '2px';
            animateArrayMerge(i + 1);
        }, currspeed);
        console.log(index.id + "after ");
    }
    if (i == steps.length) {
        isanimating = false;
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
        console.log(first.id+" "+second.id);
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

function selectionsort() {
    if (isanimating == false) {
        isanimating = true;
        reset();
        currspeed = document.getElementById("speedSlider").value;
        for (let i = 0; i < array.length; i++) {
            let minimum = i;
            for (let j = i + 1; j < array.length; j++) {
                steps.push(['compare', j, minimum]);
                if (array[j] < array[minimum]) {
                    minimum = j;
                }
            }
            steps.push(["swap", i, minimum]);
            [array[minimum], array[i]] = [array[i], array[minimum]];
        }
        animateArray(0);
    }
}

function insertionsort() {
    if (isanimating == false) {
        reset();
        isanimating = true;
        currspeed = document.getElementById("speedSlider").value;
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j > 0; j--) {
                steps.push(["compare", j, j - 1]);
                if (array[j] < array[j - 1]) {
                    steps.push(["swap", j, j - 1]);
                    [array[j], array[j - 1]] = [array[j - 1], array[j]];
                }
                else {
                    break;
                }
            }
        }
        animateArray(0);
    }
}

function mergesort() {
    if (isanimating == false) {
        isanimating = true;
        reset();
        let i = 0, j = array.length - 1;
        currspeed = document.getElementById("speedSlider").value;
        breakarray(array, i, j);
    }
    console.log("sorted");
    animateArrayMerge(0);
}

function breakarray(array, i, j) {
    if (i < j) {
        let mid = Math.floor(i + (j - i) / 2);
        breakarray(array, i, mid);
        breakarray(array, mid + 1, j);
        merge(array, i, mid, j);
    }
}

function merge(array, i, mid, j) {
    let a = [];
    let b = [];
    for (let temp = i; temp <= mid; temp++) {
        steps.push(["tomerge", temp]);
        a.push(array[temp]);
    }
    for (let temp = mid + 1; temp <= j; temp++) {
        steps.push(["tomerge", temp]);
        b.push(array[temp]);
    }
    console.log(a);
    console.log(b);
    let temp1 = i;
    let temp2 = 0;
    let temp3 = 0;
    while (temp2 < a.length && temp3 < b.length) {
        if (a[temp2] < b[temp3]) {
            steps.push(["update", temp1, a[temp2]]); 
            steps.push(["done",temp1]);
            array[temp1] = a[temp2];
            temp1++;
            temp2++;
        }
        else {
            steps.push(["update", temp1, b[temp3]]);
            steps.push(["done",temp1]);
            array[temp1] = b[temp3];
            temp1++;
            temp3++;
        }
        
    }
    if (temp2 == a.length) {
        while (temp3 < b.length) {
            steps.push(["update", temp1, b[temp3]]);
            steps.push(["done",temp1]);
            array[temp1] = b[temp3];
            temp1++;
            temp3++;
        }
    }
    if (temp3 == b.length) {
        while (temp2 < a.length) {
            steps.push(["update", temp1, a[temp2]]);
            steps.push(["done",temp1]);
            array[temp1] = a[temp2];
            temp1++;
            temp2++;
            
        }
    }
}

function quicksort(){
    if(isanimating==false){
        isanimating=true;
        reset();
        currspeed=document.getElementById("speedSlider").value;
        let i=0,j=array.length-1;
        qsort(array,i,j);
    }
    animateArray(0);
}

function qsort(array,i,j){
    console.log("sorting for i "+i+" j "+j);
    if(i<j){
        let pivot=partition(array,i,j);
        console.log("pivot is "+pivot);
        qsort(array,i,pivot-1);
        qsort(array,pivot+1,j);
    }
}

function partition(array,i,j){
    let temp1=i,temp2=i;
    while(temp2<j){
        steps.push(["compare",temp2,j]);
        if(array[temp2]<array[j]){
            steps.push(["swap",temp1,temp2]);
            [array[temp1],array[temp2]]=[array[temp2],array[temp1]];
            temp1++;
            temp2++;
        }
        else{
            temp2++;
        }
    }
    steps.push(["swap",temp1,j]);
    [array[j],array[temp1]]=[array[temp1],array[j]];
    return temp1;
}

function swap(first, second) {
    {
        first.style.backgroundColor = "maroon";
        second.style.backgroundColor = "Purple";
        let temp = first.style.height;
        first.style.height = second.style.height;
        second.style.height = temp;
    }
}