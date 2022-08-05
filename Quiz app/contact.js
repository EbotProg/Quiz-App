
let fname = document.getElementById('name');
const email = document.getElementById('email');
const phone_number = document.getElementById('phone_number');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const errMessage = 'Error! Enter valid info'

// local storage
const createEmptyArr = () => {
if(localStorage.getItem('names') == null) {
    localStorage.setItem('names', '[]');
}
if(localStorage.getItem('emails') == null) {
    localStorage.setItem('emails', '[]');
}
if(localStorage.getItem('Phone_numbers') == null) {
    localStorage.setItem('Phone_numbers', '[]');
}
if(localStorage.getItem('subjects') == null) {
    localStorage.setItem('subjects', '[]');
}
if(localStorage.getItem('messages') == null) {
    localStorage.setItem('messages', '[]');
}
}


createEmptyArr();

let locName = JSON.parse(localStorage.getItem('names'));
let locEmail = JSON.parse(localStorage.getItem('emails'));
let locPhone = JSON.parse(localStorage.getItem('Phone_numbers'));
let locSubject = JSON.parse(localStorage.getItem('subjects'));
let locMessage = JSON.parse(localStorage.getItem('messages'));

// validation using regular expressions
const numContainsLetter = /[^(\d)]/;
const nameContainsNum = /[^(\D)]/;
const isEmailCorrect = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Error p tags
const errorParas = document.querySelectorAll('p');
const labels = document.querySelectorAll('label');

const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');

// const p5 = document.createElement('p');


const validateFields = () => {
    let value = [false, false, false, false, false];
    if(nameContainsNum.test(fname.value) === false) {
        p1.remove();
        
        value[0] = true;
        
    }else if(nameContainsNum.test(fname.value) === true){
        labels[0].append(p1);
        p1.innerText = 'name should only contain letters';
    }


    if(isEmailCorrect.test(email.value) == true){
        p2.remove(); // to remove the error message when the input is correct
        
        value[1] = true;
      
    }else if(isEmailCorrect.test(email.value) == false){
        labels[1].append(p2);
        p2.innerText = "make sure that your email is in this format \"you@gmail.com\"";
    }


    if(numContainsLetter.test(phone_number.value) === false && phone_number.value.length === 9){
        p3.remove();
        
        value[2] = true;
        
    }else if(numContainsLetter.test(phone_number.value) === true || phone_number.value.length !== 9){
        labels[2].append(p3);
        p3.innerText = 'Enter only numbers. Do not enter letters. Your number must be 9 numbers long';     
    }



    if(typeof subject.value === "string"){
        value[3] = true;
       
        
    }
    if(message.value.length > 0){
        value[4] = true;
        
       
    }
    if(value[0] === true && value[1] === true && value[2]===true
        && value[3] === true && value[4] === true){
            localStorage.setItem('names', JSON.stringify(locName));
            locName.push(fname.value);
            localStorage.setItem('emails', JSON.stringify(locEmail));
            locEmail.push(email.value);
            localStorage.setItem('Phone_numbers', JSON.stringify(locPhone));
            locPhone.push(phone_number.value);
            localStorage.setItem('subjects', JSON.stringify(locSubject));
            locSubject.push(subject.value);
            localStorage.setItem('messages', JSON.stringify(locMessage));
            locMessage.push(message.value);
         
        }

}



// localStorage.removeItem('emails');
// localStorage.removeItem('Phone_numbers');
// localStorage.removeItem('subjects');
// localStorage.removeItem('messages');
// localStorage.removeItem('names');
