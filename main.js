let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};

function add() {

    
    dictionary[deText.value] = enText.value;
    deText.value = "";
    enText.value = "";

    localStorage.setItem("dictionary", JSON.stringify(dictionary));
    render();
}

function render() {
    dictionarylist.innerHTML = "";
    for (let key in dictionary) {

        dictionarylist.innerHTML += `<li>${key} - ${dictionary[key]}<button onclick="remove()" class="del_btn">X</button></li>`;
    }

}

function remove() {

}

function search() {

}