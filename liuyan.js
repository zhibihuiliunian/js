/*
* @Author: 木木
* @Date:   2017-09-25 19:52:04
* @Last Modified by:   木木
* @Last Modified time: 2017-09-26 11:00:05
*/
window.onload=function(){
let box2=document.querySelector('.box2');
let box3=document.querySelector('.box3');
let box4=document.querySelector('.box4');
let liuyan=document.querySelector('.liuyan');   
let input = document.querySelector('input')
let textarea=document.querySelector('textarea');
let button=document.querySelector('button');
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
console.log(num1.innerText)



  button.onclick = function(){
       // alert(textarea.value);
    let text = textarea.value;
    let text1=input.value
    // let divs = document.createElement('div');
    // divs.style.width='400px';
    // divs.style.height='30px';
    // divs.style.marginBottom='15px';

   let lis = document.createElement('box3');
   box4.prepenchild(lis);
   lis.innerHTML=`
   <li class="box3">


  <div class="box3-left">
    <img src="haigou2.jpg" alt=""> 
  </div>
  <div class="box3-right">
    <div class="name">${text1}</div>
    <div class="liuyan">${text}</div>

  </div>
   

  </li>
   ` 
    // liuyan.innerHTML=text;
    // box3.prepenchild(divs)
    // divs.innerHTML=text;
    textarea.value=null;
    input.value=null;
    num2.innerText=100;
    num1.innerText=0;

}

textarea.addEventListener('keyup',function(){
    num2.innerText=100-textarea.value.length;
    num1.innerText=100-num2.innerText;

})











}