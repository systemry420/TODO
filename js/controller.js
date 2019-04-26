var $in = document.querySelector('.new-todo');

var controller = {

    init: function(){
        this.launch();
    },

    launch: function () {
        // launch components
        Model.init();
        View.init();

        // listen to the Enter key
        $in.addEventListener('keypress', function (e) {
            if(e.code == 'Enter'){
                Model.add($in.value);
                View.render(Model.get());
            }
        });
    }
}

// initialize controller
controller.init();