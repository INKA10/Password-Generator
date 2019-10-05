var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '~!@#$%^&*()_+';

var charNum = document.getElementById('charNum');
var numBox = document.getElementById('num');
var symBox = document.getElementById('sym');
var submit = document.getElementById('submit');
var yourPW = document.getElementById('yourPW');



submit.addEventListener('click', function(e) {
    var characters = char;
    (numBox.checked) ? characters += num: '';
    (symBox.checked) ? characters += sym: '';
    yourPW.value = password(charNum.value, characters);
});

function password(l, characters){
    var pwd = '';
    for (var i = 0; i<l; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}

// // eventlistener to open & close modal 
document.getElementById('button').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

// copy to clipboard - need to add notification once pw has been copied

function copyPassword(){
    var copyText = document.getElementById("yourPW");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
}