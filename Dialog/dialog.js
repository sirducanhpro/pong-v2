function openDialog(){
    
    let elem = document.getElementById("dialogBox");
    elem.setAttribute('open', true);

}

function closeDialog(){
    let elem = document.getElementById("dialogBox");
    elem.removeAttribute('open');

}   