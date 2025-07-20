let i = 0;
let h2 = document.querySelector('../');
let aqua = document.querySelector('../');
let body = document.querySelector('../');
let number = document.querySelector('../');
let percentBar = document.querySelector('../');

let interval = setInterval(function(){
    number.innerHTML = i+'<span>%</span>';
    percentBar.style.width = i+'%';
    i++
    if(i == 101){
        clearInterval(interval)
        setTimeout(function(){
            h2.style.innerHTML = 'Done';
            aqua.style.opacity = '0';
            aqua.style.display = 'none';
            aqua.style.visibility = 'hidden';
            h2.style.opacity = '1';
            h2.style.visibility = 'visible';
            h2.style.display = 'flex';

        })
    }
},300)