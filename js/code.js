button = document.createElement('button');
button.id = 'button';
let rem = document.querySelector("#form");
let q = 0;

button.onclick=function(){
    alert("btn");
    if (q==0)
    {
        rem.remove();
    }
    else 
    {
        document.createElement("#form");
    }
}
button.textContent='Feedback';
document.body.appendChild(button);

let s = 0;
styleb = document.createElement('styleb');
styleb.id = 'styleb';

styleb.onclick=function(){
    if (s==0)
    {
        rem.remove();
    }
    else 
    {
        document.createElement("#form");
    }
}
button.textContent='Feedback';
document.body.appendChild(button);