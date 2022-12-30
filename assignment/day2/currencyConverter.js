function calculateCurrenty(){
    const countryFrom = document.getElementById("countryFrom").value;
    const countryTo = document.getElementById("countryTo").value;
    const currency = document.getElementById("currency").value;
    let result = currencyCalculator(countryFrom,countryTo,currency);
    if (result != undefined) {
        if (countryTo == "Russia") {
            result += " Ruble";
        }
        else {
            result += " Euro";
        }
        document.getElementById("result").innerText = result;
    }
}

function  currencyCalculator(countryFrom,countryTo,currency){
    if(countryFrom == "default" || countryTo == "default"){
        alert("Please select a country");
        return;
    }
    else{
        switch(countryFrom){
            case "India": if(countryTo == "Russia"){
                            return currency*0.76;
                        }
                        else{
                            return currency*0.011;
                        }
            case "USA": if(countryTo == "Russia"){
                             return currency*63.12;
                        }
                        else{
                            return currency*0.95;
                        }
        }
    }
}

