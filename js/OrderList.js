// Remove Selected Carts
function removeCart()
{
    var checkbox1 = document.getElementById("box1");
    var checkbox2 = document.getElementById("box2");
    var checkbox3 = document.getElementById("box3");

    if(checkbox1.checked == true){
        document.getElementById("cart1").style.display = "none";
    }

    if(checkbox2.checked == true){
        document.getElementById("cart2").style.display = "none";
    }

    if(checkbox3.checked == true){
        document.getElementById("cart3").style.display = "none";
    }
}

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


// Add and Reduce functions for cart 2
function addItem4()
{
    var num1 = parseFloat(document.calculate4.amount4.value);
    var inc = 1;
    document.calculate4.amount4.value = num1 + inc;
}

function reduceItem4()
{
    var num2 = parseFloat(document.calculate4.amount4.value);
    var dec = 1;
    document.calculate4.amount4.value = num2 - dec;

    if(document.calculate4.amount4.value == -1){
        alert("Incorrect amount");
        document.calculate4.amount4.value = 0;
    }
}

function addItem5()
{
    var num1 = parseFloat(document.calculate5.amount5.value);
    var inc = 1;
    document.calculate5.amount5.value = num1 + inc;
}

function reduceItem5()
{
    var num2 = parseFloat(document.calculate5.amount5.value);
    var dec = 1;
    document.calculate5.amount5.value = num2 - dec;

    if(document.calculate5.amount5.value == -1){
        alert("Incorrect amount");
        document.calculate5.amount5.value = 0;
    }
}

// Add and Reduce functions for cart 3
function addItem6()
{
    var num1 = parseFloat(document.calculate6.amount6.value);
    var inc = 1;
    document.calculate6.amount6.value = num1 + inc;
}

function reduceItem6()
{
    var num2 = parseFloat(document.calculate6.amount6.value);
    var dec = 1;
    document.calculate6.amount6.value = num2 - dec;

    if(document.calculate6.amount6.value == -1){
        alert("Incorrect amount");
        document.calculate6.amount6.value = 0;
    }
}