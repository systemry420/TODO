var $form = document.querySelector('form');
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
        $form.addEventListener('submit', function (e) {
            Model.add($in.value);
            View.render(Model.getAll(), Model.getCount());
            $in.value = '';
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
    },

    deleteTask: function(){
        Model.delete(this.parentNode);
        View.render(Model.getAll(), Model.getCount());
    },

    done: function(){
        if(this.checked == true){
            Model.done(this.parentNode);
            View.done(this.parentNode);
        }
        else{
            Model.undone(this.parentNode);
            View.undone(this.parentNode);
        }
    }
}

// initialize controller
controller.init();