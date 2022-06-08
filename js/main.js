/*
var slider = document.getElementById("fader");
var val = document.getElementById("value-fader");
slider.oninput=function(){
    val.innerHTML=this.value;
}

function outputUpdate(vol){
    var output = document.querySelector('#value-fader');
    output.value = vol;
    output.style.left = vol - 20 + 'px';
}*/

function outputUpdate(vol){
    var output = document.querySelector('#value-fader');
    var outputValue = document.querySelector('#value-fader-value');
    outputValue.innerHTML = vol;
    output.style.left = vol*5 + 'px';
    outputValue.style.left = vol*5 + 'px';
    console.log(vol)
}
outputUpdate(49);

document.querySelector('.list1-start').addEventListener('click', function () {
    document.querySelector('.list1-end').classList.toggle('list1-end-visual');
});

document.querySelectorAll('.list1-item').forEach(function(listItem) {
    listItem.addEventListener('click', function() {
        document.querySelector('.list1-start').innerText = this.innerText;
        document.querySelector('.list1-end').classList.remove('list1-end-visual');
    });
});

document.querySelector('.list2-start').addEventListener('click', function () {
    document.querySelector('.list2-end').classList.toggle('list1-end-visual');
});

document.querySelectorAll('.list2-item').forEach(function(listItem) {
    listItem.addEventListener('click', function () {
        document.querySelector('.list2-start').innerText = document.querySelector('.list2-start').innerText + this.innerText;
    });
});