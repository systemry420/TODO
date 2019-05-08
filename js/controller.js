/**
 * Object to control the Model and View
 * and contains:
 * - init(): initializes the view,
 *           and listens to buttons
 */


var $form = document.querySelector('form');
    $in = document.querySelector('.new-todo'),
    $clear = document.querySelector('.clear'),
    $all = document.querySelector('.all'),
    $active = document.querySelector('.active'),
    $completed = document.querySelector('.completed');


var controller = {

    init: function(){
        // launch components
        View.init();

        // listen to the Enter key on input
        $form.addEventListener('submit', function (e) {
            e.preventDefault();
            Model.add($in.value);
            View.render(Model.getAll(), Model.getCount());
            $in.value = '';
        });

        // clear all tasks
        $clear.addEventListener('click', function(){
            if(confirm('Clear all tasks?')){
                Model.drop();
                View.render([], 0);
            }
        });

        // show all tasks
        $all.addEventListener('click', function(){
            all = Model.getAll();
            View.render(all, Model.getCount());
        });

        // show active, uncompleted tasks
        $active.addEventListener('click', function(){
            act = Model.getActive();
            var c = act != null? act.length: 0;
            View.render(act, c);
        });

        // show completed tasks
        $completed.addEventListener('click', function(){
            comp = Model.getCompleted();
            var c = comp != null? comp.length: 0;

            View.render(comp, c);
        });
    },

    getElems: function () {
        return Model.getAll();
    },

    deleteTask: function() {
        Model.delete(this.parentNode);
        View.render(Model.getAll(), Model.getCount());
    },

    // manage checking a task
    done: function() {
        if(this.checked == true){
            Model.done(this.parentNode);
            View.done(this.parentNode);
        }
        else{
            Model.undone(this.parentNode);
            View.undone(this.parentNode);
        }
    },

    isComplete: function(el){
        return el.done? true:false;
    },
}

// initialize controller
controller.init();