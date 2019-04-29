var $form = document.querySelector('form');
    $in = document.querySelector('.new-todo'),
    $clear = document.querySelector('.clear'),
    $all = document.querySelector('.all'),
    $active = document.querySelector('.active'),
    $completed = document.querySelector('.completed');


var controller = {

    init: function(){
        this.launch();
    },

    launch: function () {
        // launch components
        View.init();

        // listen to the Enter key
        $form.addEventListener('submit', function (e) {
            e.preventDefault();
            Model.add($in.value);
            View.render(Model.getAll(), Model.getCount());
            $in.value = '';
        });

        $clear.addEventListener('click', function(){
            if(confirm('Clear all tasks?')){
                Model.drop();
                View.render([], 0);
            }
        });

        $all.addEventListener('click', function(){
            all = Model.getAll();
            View.render(all, Model.getCount());
        });

        $active.addEventListener('click', function(){
            act = Model.getActive();
            View.render(act, act.length);
        });

        $completed.addEventListener('click', function(){
            comp = Model.getCompleted();
            View.render(comp, comp.length);
        });
    },

    getElems: function () {
        return Model.getAll();
    },

    deleteTask: function() {
        Model.delete(this.parentNode);
        View.render(Model.getAll(), Model.getCount());
    },

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