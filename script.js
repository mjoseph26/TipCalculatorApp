
//const tips = document.querySelectorAll('button');
const inps = document.querySelectorAll('input[type=number]');
const tips = document.querySelectorAll('input[type=button]');
const total = document.getElementById('total');
const people = document.getElementById('people');

tips.forEach(tip => {
    tip.addEventListener('click', (e) => {
        let newVal = Number(e.target.value.replace('%',''));
        let tipPercent = newVal / 100;
        console.log(tipPercent);
        
    });
});

total.addEventListener('keyup',() => {
    const totalDisplay = document.getElementById('total-price');
    totalDisplay.textContent = `$${total.value}`;
})

people.addEventListener('keyup',() => {
    message = document.createElement('div');
        message.setAttribute('id','message');
        let msgContent = document.createTextNode("Can't be zero");
        message.append(msgContent);
        let p = document.getElementsByClassName('numPeople')[0];
        p.append(message);
    if(people.value === '0'){
        message.style.display = 'block';
    }
    else{
        p.removeChild(message);
    }
    //const totalDisplay = document.getElementById('total-price');
    //totalDisplay.textContent = `$${total.value}`;
});



function calculateTotal(bill,tip,numPeople){
    let total = bill + (bill * (tip / 100));
    total /= numPeople;
    console.log(total);
    return total;
}

const reset = document.getElementsByClassName('reset');
//empty text fields
reset[0].addEventListener('click', function(){
    inps.forEach((inp) => {
        inp.value = '';
    })
    
    //clear button selection
});


//when typing into custom the tip amount and total should be modified





