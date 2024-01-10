let displayValue = '';
let history = [];

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = '0';
}

function calculate() {
    try {
        const result = eval(displayValue).toString();
        document.getElementById('display').innerText = result;
        addToHistory(displayValue, result);
       
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        document.getElementById('display').style.animation = 'shake 0.3s ease-in-out';
        setTimeout(() => {
            document.getElementById('display').style.animation = '';
        }, 300);
    }
}


document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key.match(/[0-9+\-*/.=]|Enter|Backspace/)) {
        event.preventDefault(); 
        if (key === 'Enter' || key === '=') {
            calculate();
        } else if (key === 'Backspace') {
            clearLastEntry();
        } else {
            appendToDisplay(key);
            addClickAnimation(document.querySelector(`button[data-key="${key}"]`));
        }
    }
});

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').innerText = displayValue;
}


function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = '0';
}

function clearLastEntry() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').innerText = displayValue || '0';
}

function addToHistory(expression, result) {
    const operation = `${expression} = ${result}`;
    history.push(operation);
}

function showHistory() {
    const historyStr = history.join('\n');
    if(historyStr==""){
        alert("No History");
    }else
    alert('Calculation History:\n' + historyStr);
}

