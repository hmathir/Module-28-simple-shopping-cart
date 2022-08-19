function getInputValueById(isUpdate,elementID){
    const inputFieldElement = document.getElementById(elementID);
    const inputFieldString = inputFieldElement.value;
    let inputFieldAmount = parseInt(inputFieldString);
    if(isUpdate === true){
        inputFieldAmount = inputFieldAmount+1;
    }
    else if(isUpdate === false){
        inputFieldAmount = inputFieldAmount-1;
    }
    return inputFieldAmount;
}

function setValue(isValue,elementID, priceID, pricePerPcs){
    const inputFieldAmount = getInputValueById(isValue, elementID);
    const inputFieldElement = document.getElementById(elementID);
    if(inputFieldAmount < 1){
        alert('You Have To Purchase Atleast 1 Piece');
        return;
    }
    else if(inputFieldAmount > 5){
        alert('You Can\'n Purchase Over 5 Item At A Time.');
        return;
    }
    inputFieldElement.value = inputFieldAmount;
    const getPreviousPriceElement = document.getElementById(priceID);
    const setNewAmount = inputFieldAmount * pricePerPcs ;
    getPreviousPriceElement.innerText = setNewAmount;
}

function totalCalculation(item1, item2){
    const getPreviousPhonePriceElement = document.getElementById(item1); 
    const getPreviousCasePriceElement = document.getElementById(item2);
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = parseInt(getPreviousPhonePriceElement.innerText) + parseInt(getPreviousCasePriceElement.innerText);
    const tax = subTotalElement.innerText * 0.1;
    const taxElement = document.getElementById('tax');
    taxElement.innerText = tax.toFixed(2);
    const finalPrice = parseFloat(subTotalElement.innerText) + parseFloat(taxElement.innerText);
    const finalPriceElement = document.getElementById('final-price');
    finalPriceElement.innerText = finalPrice.toFixed(2);
}


function clickButton(elementId, isTrue, inputID, priceID, pricePerPcs){
    document.getElementById(elementId).addEventListener('click', function(){
        setValue(isTrue, inputID, priceID, pricePerPcs);
        totalCalculation('phn-price','case-price');
    })
}