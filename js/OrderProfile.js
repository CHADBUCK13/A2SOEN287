// Add and Reduce Functions for Cart 1
function addItem1()
{
    var num1 = parseFloat(document.calculate1.amount1.value);
    var inc = 1;
    document.calculate1.amount1.value = num1 + inc;
}

function reduceItem1()
{
    var num2 = parseFloat(document.calculate1.amount1.value);
    var dec = 1;
    document.calculate1.amount1.value = num2 - dec;

    if(document.calculate1.amount1.value == -1){
        alert("Incorrect amount");
        document.calculate1.amount1.value = 0;
    }
}

function addItem2()
{
    var num1 = parseFloat(document.calculate2.amount2.value);
    var inc = 1;
    document.calculate2.amount2.value = num1 + inc;
}

function reduceItem2()
{
    var num2 = parseFloat(document.calculate2.amount2.value);
    var dec = 1;
    document.calculate2.amount2.value = num2 - dec;

    if(document.calculate2.amount2.value == -1){
        alert("Incorrect amount");
        document.calculate2.amount2.value = 0;
    }
}

function addItem3()
{
    var num1 = parseFloat(document.calculate3.amount3.value);
    var inc = 1;
    document.calculate3.amount3.value = num1 + inc;
}

function reduceItem3()
{
    var num2 = parseFloat(document.calculate3.amount3.value);
    var dec = 1;
    document.calculate3.amount3.value = num2 - dec;

    if(document.calculate3.amount3.value == -1){
        alert("Incorrect amount");
        document.calculate3.amount3.value = 0;
    }
}

// Alert for save button
function save(){
    alert("Changes are saved!");
}