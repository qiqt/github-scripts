(function () {
    'use strict';
    var myList = document.getElementsByClassName('btn btn-sm');
    if (!confirm('Follow All?')) return;
    for (var i = 0; i < myList.length; i++) {
        if (myList[i].value === "Follow") {
            myList[i].click();
            console.log("Followed")
        }
    }
}());