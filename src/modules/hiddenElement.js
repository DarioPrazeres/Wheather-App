const elementForm = document.querySelector('div.form-group');
const buttonSearch = document.querySelector('button.btn-search');
const buttonClose = document.querySelector('button.btn-close');
const elementInfo = document.querySelector('div.info');
const elementSeta = document.querySelectorAll('div.set');
const elementListButton = document.querySelectorAll('div.list-button');

function displayForm(){
   /* 
   Show the Element
    */
   buttonSearch.addEventListener('click', ()=>{
    elementForm.classList.remove('invisible');
    elementInfo.classList.add('invisible');
    elementForm.classList.add('visible');
   });
   /*Taking All element with this Class and set them for recieve 'invisible' and 'seta' classes*/
   for(let i=0; i<elementSeta.length; i++){
        elementListButton[i].addEventListener('mousemove', ()=>{
        elementSeta[i].classList.remove('invisible');
        elementSeta[i].classList.add('seta');
       })
       elementListButton[i].addEventListener('mouseout', ()=>{
        elementSeta[i].classList.add('invisible');
        elementSeta[i].classList.remove('seta');
       })
   }
   /**
    * Hidden the Element
    */
   buttonClose.addEventListener('click', ()=>{
    elementForm.classList.remove('visible');
    elementForm.classList.add('invisible');
    elementInfo.classList.remove('invisible');
    elementInfo.classList.add('visible');
   })

}
export default displayForm;