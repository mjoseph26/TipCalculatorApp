const total = document.getElementById('total');
const people = document.getElementById('people');
const tipDisplay = document.getElementById('tip-price');
const totalDisplay = document.getElementById('total-price');
const custom = document.getElementById('custom');
let arr = [];
const tips = document.querySelectorAll('input[type=button]');

let prevButton = null;
tips.forEach(tip => {
    tip.addEventListener('click', (e) => {
        let newVal = Number(e.target.value.replace('%',''));
        let tipPercent = newVal / 100;
        e.target.style.backgroundColor = 'hsl(172, 67%, 45%)';
        if(prevButton !== null){
            prevButton.style.backgroundColor = '';
        }
        prevButton = e.target;
        
        arr[1] = tipPercent;
        console.log(arr);
        let ready = isReady();
        if(ready){
            displaySplit();
        }
    });
});

custom.addEventListener('keyup', () => {
    if(custom.value !== ''){
        arr[1] = Number(custom.value) / 100;
        console.log(arr);
        let ready = isReady();
        if(ready){
            displaySplit();
        }
    }
})



total.addEventListener('keyup',() => {
    if(total.value !== ''){
        arr[0] = total.value;
        console.log(arr);
        let ready = isReady();
        if(ready){
            displaySplit();
        }
    }
})

people.addEventListener('keyup',() => {
        let message = document.getElementById('alert');
        if(people.value === '0'){
            message.textContent = "Can't be zero";
            people.style.border = '4px solid orange'
        }
        else{
            // keep chosen button highlighted
            // add custom percentage
            message.textContent = "";
            people.style.border = "";
            if(people.value !== ''){
                arr[2] = people.value;
                let ready = isReady();
                if(ready){
                    displaySplit();
                }
                console.log(arr);
            }
        }
});

function isReady(){
    //if(arr.length < 3){
    if(total.value !== '' && arr[1] !== '' && people.value !== ''){
        return true;
        console.log('All Values Provided');
    }
    else{
        return false;
    }
}

function displaySplit(){
    
    let tipMult = Number(arr[0]) * arr[1];
    let tipPerPerson = tipMult / Number(arr[2]);
    tipPerPerson = tipPerPerson.toFixed(2);
    tipDisplay.textContent = `$${tipPerPerson}`;
    
    let totalPerPerson = (tipMult + Number(arr[0]));
    totalPerPerson = totalPerPerson / Number(arr[2]);
    totalPerPerson = totalPerPerson.toFixed(2);
    totalDisplay.textContent = `$${totalPerPerson}`;
}


const reset = document.getElementsByClassName('reset');
const inps = document.querySelectorAll('input[type=number]');
//empty text fields
reset[0].addEventListener('click', function(){
    inps.forEach((inp) => {
        inp.value = '';
    });
    tipDisplay.textContent = '$0.00';
    totalDisplay.textContent = '$0.00';
    arr = []; //empty the array

    tips.forEach(tip => {
        tip.style.backgroundColor = '';
    })
});








