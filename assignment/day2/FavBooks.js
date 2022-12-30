const favBooks = [];

function getInput(){
    const favBook = document.getElementById("favBook").value;
    favBooks.push(favBook);
    return favBook;
}
function getData(){
    const favBook = getInput();
    let ol = document.getElementById("favBooks");
    const value = "<li>" + favBook + "</li>";
    ol.innerHTML += value;
    console.log(favBooks);
}