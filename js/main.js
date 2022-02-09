/*
var slider = document.getElementById("fader");
var val = document.getElementById("value-fader");
slider.oninput=function(){
    val.innerHTML=this.value;
}*/

function outputUpdate(vol){
    var output = document.querySelector('#value-fader');
    output.value = vol;
    output.style.left = vol - 20 + 'px';
}