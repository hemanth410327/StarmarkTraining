function tempConvertion(){
    let celsius = prompt("Enter the Temperature in celsius");
    tempConvertor(celsius);
}

function tempConvertor(celsius) {
    let result = (celsius * 1.8) + 32
    alert(celsius + " C is equals to " + result + " F");
}