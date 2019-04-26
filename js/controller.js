var $in = document.querySelector('.new-todo');
var $clear = document.querySelector('.clear');

var controller = {

    init: function(){
        this.launch();
    },

    launch: function () {
        // launch components
        View.init();

        // listen to the Enter key
        $in.addEventListener('keypress', function (e) {
            if(e.code == 'Enter'){
                Model.add($in.value);
                View.render(Model.getAll(), Model.getCount());
                $in.value = '';
            }
        });

        $clear.addEventListener('click', function(){
            if(confirm('Clear all tasks?')){
                Model.drop();
                View.render([], 0);
            }
        })
    },

    getElems: function () {
        return Model.getAll();
    }
}

// initialize controller
controller.init();