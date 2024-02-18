const signinbtnlink = document.querySelector('.signupbtn-link');

const signupbtnlink = document.querySelector('.signinbtn-link');

const wrapper = document.querySelector('.wrapper');

signupbtnlink.addEventListener('click', () =>{
    wrapper.classList.toggle('active');
});

signinbtnlink.addEventListener('click', () =>{
    wrapper.classList.toggle('active');
});