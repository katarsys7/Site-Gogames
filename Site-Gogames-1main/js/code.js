/*
<div class="formpage" id="form">
<form>
    <div class="formname">Обратная связь</div>
        <div class="formusername">Ваше имя</div>
        <input class="formusernamefield" type="text" minlength="1" maxlength="32" pattern="[a-z]|[A-Z]|[а-я]|[А-Я]{1-30}">
            <div class="formemail">Ваша электронная почта</div>
            <input class="formemailfield" type="email" minlength="4" maxlength="32">
                <div class="formnumber">Ваш возраст</div>
                <input class="formnumberfield" type="number" min="4" max="150">
                    <div class="pozhelaniya">Рекомендации</div>
                    <textarea class="pozhelaniyafield" maxlength="1024"></textarea>
                        <div class="formcheckbox"><input class="formcheckboxfield" type="checkbox">  Вы согласны на обработку персональных данных</div>
                            <input class="button" type="submit" value="Отправить">
    </form>
</div>;
*/

/*
document.querySelector("html").onclick = function(){
    alert("Click");
}
*/


let button = document.createElement('button');
let footer = document.querySelector(".footer");
// document.body.appendChild(button);
//forma1 = document.createElement('forma');
footer.after(button);
button.id = 'button';
button.classList.add("new_class");
//forma1.id = 'form';
let rem = document.querySelector("#form");
let q = 1;
button.onclick=function(){
    if (q==0)
    {   
        q=1;
        rem.remove();
    }
    else 
    {
        q=0;
        document.body.appendChild(forma1);
    }
}
button.textContent='Feedback';



/*
const btn=document.querySelector("button");

document.body.appendChild(btn);
btn.addEventListener("click",()=>{
    let btn=document.createElement("div");
    btn.innerHTML="new div";
    btn.classList.add("new_style");
    btn.before(btn);
    let new_element_close=document.createElement("input");
    new_element_close.type="btn";
    new_element_close.value="X";
    new_element_close.addEventListener("click",()=>{
        btn.remove();
    })
    btn.append(new_element_close);
})
*/