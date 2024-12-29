const buttons = document.querySelectorAll(".buttons")
const inputElement = document.querySelector(".input-field")
const deleteButton = document.querySelector(".delete-button")
const allClearButton = document.querySelector(".all-clear-button")
const equalToButton = document.querySelector(".equal-to-button")


let string = "";

function updateString() {
    inputElement.value = string;
}


function calculateValue() {

    let numArray = [];
    let opArray = [];
    let temp = "";

    // Adding space to take the last number
    string += ' ';

    // taking the numbers and the operators in 2 different arrays
    for (let i = 0; i < string.length; i++)
    {
        let c = string.charAt(i)
        if (c == '/' || c == '*' || c == '-' || c == '+' || c == '%' || c == ' ')
        {
            numArray.push(parseFloat(temp));
            temp = "";
            if (c != ' ')
                opArray.push(c)
        }
        else {
            temp += c;
        }
    }

    // numarray has all the numbers 
    // operator array has all the operators

    let res = numArray[0];
    for (let i = 1; i < numArray.length; i++)
    {
        let c = opArray[i - 1];
        switch (c) {
            case '+':
                res = res + numArray[i];
                break;
            case '-':
                res = res - numArray[i];
                break;
            case '*':
                res = res * numArray[i];
                break;
            case '/':
                res = res / numArray[i];
                break;
            case '%':
                res = res % numArray[i];
                break;
        }
    }

    res = res.toFixed(2)

    string = res.toString();

}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        string += button.innerHTML;
        updateString();
        console.log(string);
        
    })
})


deleteButton.addEventListener('click', () => {
    string = string.substring(0, string.length - 1)
    updateString();

})

allClearButton.addEventListener('click', () => {
    string = ""
    updateString()
})

equalToButton.addEventListener('click', () => {
    calculateValue()
    updateString()
    string = "";
})



