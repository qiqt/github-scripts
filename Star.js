(function () {
    'use strict';
    var myList = document.getElementsByClassName('btn btn-sm');
    if (!confirm('Star All?')) return;
    for (var i = 0; i < myList.length; i++) {
        if (myList[i].value === "Star") {
            myList[i].click();
            console.log("Starred")
        }
    }
}());