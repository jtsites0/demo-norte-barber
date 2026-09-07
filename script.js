const menuButton=document.querySelector('.menu');
const nav=document.querySelector('.nav');
const dialog=document.querySelector('#booking');
const closeButton=document.querySelector('.booking-close');

menuButton?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});

document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));

document.querySelectorAll('[data-open-booking]').forEach(button=>button.addEventListener('click',()=>{
  if(typeof dialog?.showModal==='function') dialog.showModal();
}));

closeButton?.addEventListener('click',()=>dialog?.close());
dialog?.addEventListener('click',event=>{
  if(event.target===dialog) dialog.close();
});
