(function () {
    'use strict';
    var myList = document.getElementsByClassName('btn btn-sm');
    if (!confirm('Unfollow All?')) return;
    for (var i = 0; i < myList.length; i++) {
        if (myList[i].value === "Unfollow") {
            myList[i].click();
            console.log("Unfollowed")
        }
    }
}());