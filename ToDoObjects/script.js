var MyApp = {};
MyApp.items = [];

MyApp.toggleDone = function (index) {
    "use strict";
    MyApp.items[index].isDone = !MyApp.items[index].isDone;
    MyApp.writeItems();
}

MyApp.writeItems = function () {
    "use strict";
    var stringHolder = "";
    for (var i in MyApp.items) {
        if (MyApp.items[i].isDone) {
            stringHolder += "<span class='done glyphicon glyphicon-ok' onclick='MyApp.toggleDone(" + i + ")';>";
        } else {
            stringHolder += "<span class='glyphicon' onclick='MyApp.toggleDone(" + i + ")';>";
        }
        stringHolder += MyApp.items[i].taskName;
        stringHolder += "</span>";
        stringHolder += "<br />";
    }
    document.getElementById("list").innerHTML = stringHolder;
}

MyApp.addItem = function () {
    "use strict";
    var newItem = document.getElementById("item-input");
    var holder = {
        taskName: newItem.value,
        isDone: false
    };
    holder.taskName = newItem.value;
    MyApp.items.push(holder);
    newItem.value = "";
    MyApp.writeItems();
}

MyApp.deleteItems = function () {
    "use strict";
    for (var i = MyApp.items.length - 1; i >= 0; i--) {
        if (MyApp.items[i].isDone) {
            MyApp.items.splice(i, 1);
        }
    }
    MyApp.writeItems();
}