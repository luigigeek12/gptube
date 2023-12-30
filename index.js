// script.js
window.onload = function() {
    var searchButton = document.querySelector('button');
    var searchInput = document.querySelector('input');

    searchButton.onclick = function() {
        var searchText = searchInput.value;
        alert('Searching for: ' + searchText);
    };
};
