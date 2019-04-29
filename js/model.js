/**
 * Object to handle the raw data, using localStorage
 * and contains:
 * - add(task): to localStorage
 * - delete(t): task from the model
 * - drop(): all tasks
 * - other functions to manage checking/unchecking,
 *          and manage getting tasks
 */

var Model = {
    arr: [],

    add: function(task) {
        // set an object with the name of a task
        var item = {
            name: task,
            done: false
        };

        if(localStorage.getItem('todo') === null){
            var arrItem = [];

            arrItem.push(item);
            // JSON.stringify the array and set it localStorage
            localStorage.setItem('todo', JSON.stringify(arrItem));
        }
        else{
            // if localStorage item is found

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

        // splice item when found
        for (const key in arr) {
            const el = arr[key];
            if(el.name === item){
                arr.splice(key, 1);
                break;
            }
        }

        localStorage.setItem('todo', JSON.stringify(arr));
    },

    done: function(t){
        // set done property to true, when task is checked
        var item = t.children[1].textContent;
        try {
            arr = JSON.parse(localStorage.getItem('todo'));
        } catch (error) {
            console.log("ob " + error);
        }

        for (const key in arr) {
            const el = arr[key];
            if(el.name === item){
                el.done = true;
                break;
            }
        }

        localStorage.setItem('todo', JSON.stringify(arr));
    },

    undone: function(t){
        // set done property to false, when task is unchecked
        var item = t.children[1].textContent;
        try {
            arr = JSON.parse(localStorage.getItem('todo'));
        } catch (error) {
            console.log("ob " + error);
        }

        for (const key in arr) {
            const el = arr[key];
            if(el.name === item){
                el.done = false;
                break;
            }
        }

        localStorage.setItem('todo', JSON.stringify(arr));
    },

    getAll: function(){
        return JSON.parse(localStorage.getItem('todo'));
    },

    getActive: function(){
        // get active tasks, done is false
        try {
            arr = JSON.parse(localStorage.getItem('todo'));
        } catch (error) {
            console.log("ob " + error);
        }

        const active = arr.filter(el => {
            return el.done == false;
        });

        return active;
    },

    getCompleted: function(){
        // get completed tasks, done is true
        try {
            arr = JSON.parse(localStorage.getItem('todo'));
        } catch (error) {
            console.log("ob " + error);
        }

        const completed = arr.filter(el => {
            return el.done == true;
        });

        return completed;
    },

    getCount: function(){
        return JSON.parse(localStorage.getItem('todo')).length;
    },

    drop: function(){
        localStorage.clear();
    }
}