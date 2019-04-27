
var Model = {
    arr: [],

    add: function(task) {
        // add item to storage
        var item = {
            name: task,
            done: false
        };

        if(localStorage.getItem('todo') === null){
            var arrItem = [];
            // push item object to the empty array
            arrItem.push(item);
            // JSON.stringify the array and set it localStorage
            localStorage.setItem('todo', JSON.stringify(arrItem));
        }
        else{
            try {
                arrItem = JSON.parse(localStorage.getItem('todo'));
            } catch (error) {
                console.log("ob " + error);
            }

            // add item to array
            arrItem.push(item);
            // restore it to localstorage
            localStorage.setItem('todo', JSON.stringify(arrItem));
        }
    },

    delete: function(t){
        // delete an item
        var item = t.children[1].textContent;

        try {
            arr = JSON.parse(localStorage.getItem('todo'));
        } catch (error) {
            console.log("ob " + error);
        }

        for (const key in arr) {
            const el = arr[key];
            if(el.name === item){
                arr.splice(key, 1);
                break;
            }
        }

        localStorage.setItem('todo', JSON.stringify(arr));
    },

    getAll: function(){
        return JSON.parse(localStorage.getItem('todo'));
    },

    getCount: function(){
        return JSON.parse(localStorage.getItem('todo')).length;
    },

    drop: function(){
        localStorage.clear();
    }
}