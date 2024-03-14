let todoList = [];

function showTask () {

    let task = '';
    for(let i = 0 ; i<todoList.length ; i++) {

        task +=  `<p>${todoList[i]}</p>`;
    }
    document.querySelector('.js-div').innerHTML = task;
}

function handleadd() {
    
    console.log('chaliye shuru karte hai');
    const inputElement = document.querySelector('.js-input');
    const input = inputElement.value;
    todoList.push(input);
    inputElement.value = '';
    showTask();
}
function handleKeyDown(event) {
    console.log(event);
    console.log(event.key);
    if(event.key === 'Enter') {
        handleadd();
        //tkkk
    }
}