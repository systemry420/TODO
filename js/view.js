var View = {
    $list: document.querySelector('.todo-list'),
    $count: document.querySelector('.todo-count'),

    init: function () {
        // handles DOM
        this.$list.innerHTML = '';
        this.$count.innerHTML = '0 tasks';
        var arr = controller.getElems();
        if(arr !== null){
            arr.forEach(el => {
                var li = document.createElement('li');
                var check = document.createElement('input');
                check.setAttribute('type', 'checkbox');
                li.classList.add('task');
                li.append(check);
                li.append(el.name);
                this.$list.append(li);
            });

            var p = arr.length == 1? ' task': ' tasks';
            this.$count.innerHTML = arr.length + p;

        }
    },

    render: function(arr, c) {
        // render every time the model is updated
        this.$list.innerHTML = '';
        if(arr.length !== 0){
            arr.forEach(a => {
                var li = document.createElement('li');
                var check = document.createElement('input');
                check.setAttribute('type', 'checkbox');
                li.classList.add('task');
                li.append(check);
                li.append(a.name);
                this.$list.append(li);
            });
        }

        var p = arr.length == 1? ' task': ' tasks';
        this.$count.innerHTML = c + p;
    }
}