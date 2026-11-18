const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Open navigation');
}));
document.querySelector('#signup').addEventListener('submit',event=>{
  event.preventDefault();
  const email=document.querySelector('#email');
  const note=document.querySelector('#form-note');
  if(!email.checkValidity()){email.reportValidity();return;}
  note.textContent='SIGNAL RECEIVED. YOU ARE ON THE LIST.';
  note.style.color='#d7ff62';
  email.value='';
});