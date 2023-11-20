const menu_icon = document.querySelector('.menu_icon');
const nav_menu = document.querySelector('.navMenu ul');
const contacts = document.querySelector('.maps');
const maps = document.querySelector('iframe');

menu_icon.addEventListener('click', function(){
    nav_menu.classList.toggle('active')
})

contacts.addEventListener('click', function(){
    maps.classList.toggle('active')
})

const allInput = form.querySelectorAll('input');
const inputEmail = document.querySelector('.email');
const inputPhone = document.querySelector('.phone');
const inputFirstName = document.querySelector('.first_name'); 
const inputLastName = document.querySelector('.last_name');   
const inputCheckbox = document.querySelector('.checkbox');    

function validation(form){

    function removeError(input){
        const parent = input.parentNode;

        if(parent.classList.contains('error')){
            parent.querySelector('.error_label').remove();
            parent.classList.remove('error');
        }
    }

    function createError(input, text){
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');

        errorLabel.classList.add('error_label');
        errorLabel.textContent = text;

        parent.classList.add('error');

        parent.append(errorLabel);
    }

    function validateEmail(email) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[0-9\s]*$/;
        return phoneRegex.test(phone);
    }

    function validateName(name) {
        const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
        return nameRegex.test(name);
    }

    let result = true;

    for (const input of allInput) {
        removeError(input);

        if (input.dataset.minLength) {
            if (input.value.length < input.dataset.minLength) {
                removeError(input);
                createError(input, `Minimum number of characters: ${input.dataset.minLength}`);
                result = false;
            }
        }

        if (input.dataset.maxLength) {
            if (input.value.length > input.dataset.maxLength) {
                removeError(input);
                createError(input, `Maximum number of characters: ${input.dataset.maxLength}`);
                result = false;
            }
        }

        if (input === inputEmail && !validateEmail(input.value)) {
            removeError(input);
            createError(input, 'Incorrect e-mail format');
            result = false;
        }

        if (input === inputPhone && !validatePhone(input.value)) {
            removeError(input);
            createError(input, 'Incorrect phone format');
            result = false;
        }

        if ((input === inputFirstName || input === inputLastName) && !validateName(input.value)) {
            removeError(input);
            createError(input, 'Incorrect first or last name');
            result = false;
        }

        if (input === inputCheckbox && !input.checked) {
            removeError(input);
            createError(input, 'The checkbox should be checked');
            result = false;
        }

        if (input.value === "") {
            removeError(input);
            createError(input, 'Field not filled in');
            result = false;
        }
    }

    return result;
}

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    if(validation(this) === true){
        window.location.href = 'message.html';
        this.reset();
    }
});



function checkCookieConsent() {
    return localStorage.getItem('cookieConsent') === 'true';
}

function setCookieConsent() {
    localStorage.setItem('cookieConsent', 'true');
}

window.onload = function () {
    if (!checkCookieConsent()) {
        openCookieModal();
    }
};

function openCookieModal() {
    var modal = document.getElementById('cookieModal');
    modal.style.display = 'block';
}

function closeCookieModal() {
    var modal = document.getElementById('cookieModal');
    modal.style.display = 'none';
    
    setCookieConsent();
}

