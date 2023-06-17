// let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
const shapes = document.querySelectorAll(".shape");
const x = event.clientX / 20;
const y = event.clientY / 20;

for (let i = 0; i < shapes.length; ++i){
    const isOdd = i % 2 !== 0;
    const BoolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * BoolInt}px, ${y * BoolInt}px)`
}
}

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if (contrastToggle){
        document.body.classList += 'dark-theme'
    }
    else {
        document.body.classList.remove('dark-theme')
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        "service_ogpxwce",
        'template_4dldrmk',
        event.target,
        'nCrrK3pIcZVm9-J96'
    ).then(() => {
        loading.classList.remove('modal__overlay--visible');
        success.classList += ' modal__overlay--visible';
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible');
        alert(
            'the email service is temperarily unavailable. please contact me directly on email@email.com'
        );
    })
}

let isModalOpen = false;
 function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove('modal--open')
    }
    isModalOpen = true;
   document.body.classList += " modal--open"
 }