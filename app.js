const btn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.navlinks')

// btn.appendChild(navLinks);
// console.log(btn);
// console.log(navLinks);
btn.addEventListener('click',buttonClick)

function buttonClick(){
    navLinks.classList.toggle('active');
    // console.log('clicked me');
    
}


window.onscroll=()=>{
    navLinks.classList.remove("active")
}
// console.log(window);