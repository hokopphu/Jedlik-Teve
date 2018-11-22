
function valasz(valasz){
    return document.getElementById('response').innerText =valasz;
}

function response(){
    var teve = document.getElementById('teveDb');
    var strucc = document.getElementById('struccDb');

    valasz("");
    if (teve.value==0 || strucc.value==0){
        return valasz("Hibás adat");
    }
    else if (teve.value<5){
        return valasz("Ettől több teve van!")
    }
    else if (teve.value>5){
        return valasz("Ettől kevesebb teve van!")
    }
    else if (strucc.value==19){
        return valasz("Helyes! 5 teve és 19 strucc")
    }else return valasz("")
}