let btn = document.querySelector('button');
let tarea = document.querySelector('textarea');

btn.addEventListener('click' , ()=>{
    tarea.select();
    let texvalue = tarea.value;
    navigator.clipboard.writeText(texvalue);
    btn.innerText = 'copyed';
    btn.style.backgroundColor = 'rgb(147, 226, 255) ';

    setTimeout(()=>{
btn.innerText = 'copy';
btn.style.backgroundColor = 'rgb(25, 167, 255)';
    } ,1500 )
})