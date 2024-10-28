`use strict`
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

const DELAY = Number(form.elements.delay.value);
const radiocheck = form.elements.state.value;

const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        if(radiocheck === "fulfilled"){
            resolve(`✅ Fulfilled promise in ${DELAY}ms`);
        } else {
            reject(`❌ Rejected promise in ${DELAY}ms`);
        };
    }, DELAY);
    })
    .then(message => iziToast.show({
        title: 'Success',
        message: message,
        color: `green`
    }))
    .catch(message => iziToast.show({
        title: 'Error',
        message: message,
        color: `red`
    }));    
    form.reset();
});