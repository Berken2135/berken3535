const wrapper=document.querySelector('.wrapper')
const loginLink=document.querySelector('.login-link')
const registerLİnk=document.querySelector('.register-link')

registerLİnk.addEventListener('click',()=>{
    wrapper.classList.add('active')
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
})

function formSubmit(){

    const email=document.querySelector('.email').value
    const sifre=document.querySelector('.sifre').value
    
    localStorage.setItem("email", email);
    localStorage.setItem("password", sifre);

    console.log(email)
    console.log(sifre)
    return true
}
function registerSubmit(){

    const email1=document.querySelector('.email1').value
    const sifre1=document.querySelector('.sifre1').value
    const name=document.querySelector('.name').value
    
    localStorage.setItem("email1", email1);
    localStorage.setItem("password1", sifre1);
    localStorage.setItem("name",name)

    console.log(name)
    console.log(email1)
    console.log(sifre1)
    return true
}