
// creating variable and taking id of button as counter store the counter.
const countValue=document.querySelector('#counter');
// creating a function using arrow function
const increment=()=>{
    //get the value from ui
    let value=parseInt(counter.innerText);
    // update the value
    value=value+1;
    // set the value onto ui
    counter.innerText=value;
};
// creating a function using arrow function
const decrement=()=>{
    // get the value from ui
    let value=parseInt(counter.innerText);
    // update the value
    value=value-1;
    // set the value onto ui
    counter.innerText=value;
};