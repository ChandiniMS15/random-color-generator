const btn = document.querySelector('#v2')
const h1 = document.querySelector('h1')
btn.addEventListener('click',function(){
       
       const r = Math.floor(Math.random()*255);
       const g = Math.floor(Math.random()*255);
       const b = Math.floor(Math.random()*255);
       const newcolour ='rgb('+ r + ',' + g + ','+ b +')';
       document.body.style.backgroundColor = newcolour ;
       h1.innerText = newcolour;



});