
ScrollReveal().reveal('.animation', { delay: 200 });

function exit() {
    let area = document.querySelector("#pop-up")

    if(area.style.display == 'flex'){
        area.style.display = 'none';
    }else {
        area.style.display = 'flex';
    }
}

function minMain (){
    answerNo();
   setTimeout(show, 2000);
}

function answerNo(){
    let no = document.querySelector("#border");
    // let areaQuesion = document.querySelector("#");

    if(no.classList.contains('animate__backOutDown') == false){
        no.classList.add("animate__backOutDown");
        // no.style.setProperty('--animate-duration', '2s');
    } else {
        no.classList.remove("animate__backOutDown");
    }
    setTimeout(unshow, 2000)
}

function unshow() {
    let no = document.querySelector("#border");
    no.style.display = 'none';        
}

function show() {
    let hid = document.querySelector('#message-hidden');
    
    hid.style.display = "flex";
    // hid.style.setProperty('--animate-duration', '2s');
    hid.classList.add("animate__bounceInUp");
}

