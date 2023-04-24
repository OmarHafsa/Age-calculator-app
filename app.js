//output element
const form = document.getElementById('form');
const output1=document.querySelector('.output-year');
const output2=document.querySelector('.output-month');
const output3=document.querySelector('.output-day');
const submit_btn=document.querySelector('.submit-btn');
//input element
let isValid =false;
const input1=document.querySelector('#year');
const input2=document.querySelector('#month');
const input3=document.querySelector('#day');
//erreur element
const error1=document.querySelector('.error-year');
const error2=document.querySelector('.error-month');
const error3=document.querySelector('.error-day');
submit_btn.addEventListener('click',function(e){
    e.preventDefault();
});
submit_btn.addEventListener('click', CalculateDate);
input3.addEventListener('input', e =>{
    if(+input3.value > 31){
    error3.textContent = 'must be a valid day';
       isValid =false;
       return;
    }
    else{
        isValid =true;
        error3.textContent = '';
    }
    if(+input3.value ===0){
    isValid = false;
    error3.textContent ='This field is required';
    isValid = false;
    return;
    }
    else{
     error3.textContent = '';
    }
});
input2.addEventListener('input', e =>{
    if(+input2.value > 12){
    error2.textContent = 'must be a valid month';
       isValid =false;
       return;
    }
    else{
        isValid =true;
        error2.textContent = '';
    }
    if(+input2.value ===0){
    isValid = false;
    error2.textContent ='This field is required';
    isValid = false;
    return;
    }
    else{
     error2.textContent = '';
    } 
});
input1.addEventListener('input', e =>{
    if(+input1.value > 2023){
       error1.textContent = 'must be a valid past';
       isValid =false;
       return;
    }
    else{
        isValid =true;
        error1.textContent = '';
    }
    if(+input1.value ===0){
    isValid = false;
    error1.textContent ='This field is required';
    isValid = false;
    return;
    }
    else{
     error1.textContent = '';
    } 
});
function CalculateDate(){
    if(isValid){
    let birthday =`${input3.value}/${input2.value}/${input1.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiffMill);
    let ageYear = ageDate.getUTCFullYear()- 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay()-1;
    output3.textContent =ageDay;
    output2.textContent = ageMonth;
    output1.textContent = ageYear;
    }
    else{
        alert('error');
    }
}