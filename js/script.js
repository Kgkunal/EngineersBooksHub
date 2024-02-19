// search btn
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
}

// login form btn
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.add('active');
};

// login form close btn
let closebtn = document.querySelector('#close-login-btn');
closebtn.onclick=()=>{
loginForm.classList.remove( 'active' );
}

window.onscroll =()=>{
    searchForm.classList.remove('active');
}
window.onscroll = ()=>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = ()=>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}