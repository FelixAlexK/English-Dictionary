let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};
function add() {

    try {
        dictionary[deText.value] = enText.value;
        deText.value = "";
        enText.value = "";

        localStorage.setItem("dictionary", JSON.stringify(dictionary));
        render();
    } catch (error) {
        handleError(error);
    }


}

function resizeDictionary() {

    var main = document.getElementById('main').offsetHeight;
    var sidebar = document.getElementById('dictionarylist').offsetHeight;
    if (sidebar > main) {
        main = sidebar;
        document.getElementById('main').style.height = document.getElementById('dictionarylist').style.height = main + 'px'
    } else {
        sidebar = main;
        document.getElementById('dictionarylist').style.height = document.getElementById('main').style.height = sidebar + 'px'
    }

}

function render() {
    try {
        dictionarylist.innerHTML = "";
        for (let key in dictionary) {

            dictionarylist.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
        }
        itemsCount();
    } catch (error) {
        handleError(error);
    }


}

function itemsCount() {
    try {
        let items = Object.keys(dictionary).length;
        dictionaryItemsCount.innerHTML = `${items} entries`;
    } catch (error) {
        handleError(error);
    }

}

function handleError(error) {
    //alert("Error: " + error);
}