let ripetizioni = 100;
const quadrati = document.querySelector('.contenitore');

for(let i = 1; i <= ripetizioni; i++){
   if(i % 15 == 0) {
       quadrati.innerHTML += `<div class= "quadrato diviso-15">FizzBuzz</div>`;
    }else if(i % 5 == 0) {
        quadrati.innerHTML += `<div class= "quadrato diviso-5">Buzz</div>`;
    }else if(i % 3 ==0 ){
        quadrati.innerHTML += `<div class= "quadrato diviso-3">Fizz</div>`;
    }else{
        quadrati.innerHTML += `<div class= "quadrato numeri">${i}</div>`;
    }
}



