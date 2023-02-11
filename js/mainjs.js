import { portugueseText } from './portuguese_text.js';
import { englishText } from './english_text.js';


const menuContact = document.querySelector('.menu-contact');
const menuMobileContact = document.querySelector('.menu-mobile-contact');
const contactWrapper = document.querySelector('.contact-wrapper');
const closeButton = document.querySelector('.close-button');
const burger = document.querySelector(".burger");
const navMobile = document.querySelector(".nav-mobile");
const brazilFlag = document.querySelector('.brazil-flag');
const usFlag = document.querySelector('.us-flag');
const submitContact = document.querySelector("#submit");
const nameContact = document.querySelector('#name');
const emailContact = document.querySelector('#email');
const messageContact = document.querySelector('#message');
const alertName = document.querySelector('.alert-name');
const alertEmail = document.querySelector('.alert-email');
const alertMessage = document.querySelector('.alert-message');
const emailSent = document.querySelector('.email-sent');


menuContact.addEventListener('click', () => {
    contactWrapper.classList.add('contact-wrapper-active');
})

menuMobileContact.addEventListener('click', () => {
    contactWrapper.classList.add('contact-wrapper-active');
})

closeButton.addEventListener('click', () => {
    contactWrapper.classList.remove('contact-wrapper-active');
    emailSent.classList.remove('alert-active');
    alertName.classList.remove('alert-active')
    alertEmail.classList.remove('alert-active')
    alertMessage.classList.remove('alert-active')
    nameContact.value = '';
    emailContact.value = '';
    messageContact.value = '';
})

navMobile.addEventListener('click', () => {
    navMobile.classList.toggle("nav-mobile2");
})

burger.addEventListener("click", () => {
    navMobile.classList.toggle("nav-mobile2");
})

brazilFlag.addEventListener('click', () => {
    translate(portugueseText);
})

usFlag.addEventListener('click', () => {
    translate(englishText);
})


function translate(lang) {
    // document.querySelector(".menu-desktop div:nth-child(1) a").textContent = 123;
    $(".menu-desktop div:nth-child(1) a").text(lang.menuDesktop1);
    $(".menu-desktop div:nth-child(2) a").text(lang.menuDesktop2);
    $(".menu-desktop div:nth-child(3) a").text(lang.menuDesktop3);
    $(".menu-desktop div:nth-child(4) a").text(lang.menuDesktop4);
    $(".menu-block div:nth-child(1) a").text(lang.menuMobile1);
    $(".menu-block div:nth-child(2) a").text(lang.menuMobile2);
    $(".menu-block div:nth-child(3) a").text(lang.menuMobile3);
    $(".menu-block div:nth-child(4) a").text(lang.menuMobile4);
    $("form h1").text(lang.formTitle);
    $("#submit").val(lang.submitButton);
    $("#name").attr('placeholder', lang.formName);
    $("#message").attr('placeholder', lang.formMessage);
    $(".alert-name").text(lang.alertName);
    $(".alert-email").text(lang.alertEmail);
    $(".alert-message").text(lang.alertMessage);
    $(".email-sent").text(lang.emailSent);
    $('.slogan').text(lang.title);
    $('.bc1 h1').text(lang.boxTitle1);
    $('.bc1 h2').text(lang.boxText1);
    $('.learn1 a').text(lang.learn1);
    $('.bc4 h1').text(lang.boxTitle4);
    $('.bc4 h2').text(lang.boxText4);
    $('.learn2 a').text(lang.learn4);
    $('.bc5 .h1-photo').text(lang.boxTitle5);
    $('.bc5 .h2-photo').text(lang.boxText5);
    $('.bc6 .h1-photo').text(lang.boxTitle6);
    $('.bc6 .h2-photo').text(lang.boxText6);
    $('.testimonials-header').text(lang.testimonialTitle);
    $('.card-1 p').text(lang.clientText1);
    $('.card-2 p').text(lang.clientText2);
    $('.card-3 p').text(lang.clientText3);
    $('.cards-wrapper div:nth-child(1) .profession').text(lang.clientOccupation1);
    $('.cards-wrapper div:nth-child(2) .profession').text(lang.clientOccupation2);
    $('.cards-wrapper div:nth-child(3) .profession').text(lang.clientOccupation3);
    $('.nav-footer a:nth-child(1)').text(lang.menuFooter1);
    $('.nav-footer a:nth-child(2)').text(lang.menuFooter2);
    $('.nav-footer a:nth-child(3)').text(lang.menuFooter3);
}


const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;




submitContact.addEventListener('click', (e) => {
    e.preventDefault();

    alertName.classList.remove('alert-active')
    alertEmail.classList.remove('alert-active')
    alertMessage.classList.remove('alert-active')


    if (nameContact.value === '') {
        alertName.classList.add('alert-active')
        return;
    }

    if (!emailPattern.test(email.value)) {
        alertEmail.classList.add('alert-active')
        return;
    }

    if (message.value === '') {
        alertMessage.classList.add('alert-active')
        return;
    }

    nameContact.value = '';
    emailContact.value = '';
    messageContact.value = '';
    emailSent.classList.add('alert-active');
})