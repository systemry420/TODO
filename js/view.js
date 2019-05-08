/**
 * Object to handle the view of the app
 * and contains:
 * - init(): initializes the view
 * - render(Array, number): renders the view whenever model updates
 **/

var View = {
    $list: document.querySelector('.todo-list'),
    $count: document.querySelector('.todo-count'),

    init: function () {
        // initializes the view
        this.$list.innerHTML = '';
        this.$count.textContent = '0 tasks';
        var arr = controller.getElems();
        
        if(arr !== null){
            arr.forEach(el => {
                // get the template of list item
                taskTemplate(el);
            });

            var p = arr.length == 1? ' task': ' tasks';
            this.$count.innerHTML = arr.length + p;
        }
    },

    render: function(arr, c) {
        // render every time the model is updated
        this.$list.innerHTML = '';
        if(arr !== null){
            arr.forEach(el => {
                taskTemplate(el);
            });
            var p = arr.length == 1? ' task': ' tasks';
            this.$count.innerHTML = c + p;
        }

    },

    done: function(t){
        t.classList.add('done');
    },

    undone: function(t){
        t.classList.remove('done');
    }
}