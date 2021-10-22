(function () {
    'use strict';
    var myList = document.getElementsByClassName('btn btn-sm');
    if (!confirm('Unstar All?')) return;
    for (var i = 0; i < myList.length; i++) {
        if (myList[i].value === "Unstar") {
            myList[i].click();
            console.log("Unstarred")
        }
    }
}());