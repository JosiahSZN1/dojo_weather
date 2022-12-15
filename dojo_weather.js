var authMsg = document.querySelector("#auth");
var tempsAll = document.querySelectorAll('.hi-lo span');
// var farenheit = document.querySelector('#farenheit').innerText;
// var celsius = document.querySelector('#celsius').innerText;

function hide () {
    authMsg.remove();
}


function convertTemp (element) {
    for(i=0;i<tempsAll.length;i++) {
        var temp = tempsAll[i];
        if(element.value == 'F'){
            temp.innerText = parseInt((temp.innerText * 9 / 5) + 32);
        } else {
            temp.innerText = parseInt((temp.innerText - 31) * 5 / 9);
        }
        
    }
}