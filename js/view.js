var View = {
    $list: document.querySelector('.todo-list'),
    $count: document.querySelector('.todo-count'),

    init: function () {
        // handles DOM
        this.$list.innerHTML = '';
        this.$count.textContent = '0 tasks';
        var arr = controller.getElems();
        if(arr !== null){
            arr.forEach(el => {
                var li = document.createElement('li');
                var check = document.createElement('input');
                var name = document.createElement('span');
                var del = document.createElement('a');

                check.setAttribute('type', 'checkbox');
                li.classList.add('task');
                name.classList.add('task-name');
                name.append(el.name);
                del.innerHTML = '<a class="fa fa-trash"></a>';
                del.setAttribute('href', '#');
                del.addEventListener('click', controller.deleteTask);
                li.append(check);
                li.append(name);
                li.append(del)
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
            arr.forEach(el => {
                var li = document.createElement('li');
                var check = document.createElement('input');
                var name = document.createElement('span');
                var del = document.createElement('a');

                check.setAttribute('type', 'checkbox');
                li.classList.add('task');
                name.classList.add('task-name');
                name.append(el.name);
                del.innerHTML = '<a class="fa fa-trash"></a>';
                del.setAttribute('href', '#');
                del.addEventListener('click', controller.deleteTask);

                li.append(check);
                li.append(name);
                li.append(del)
                this.$list.append(li);
            });
        }

        var p = arr.length == 1? ' task': ' tasks';
        this.$count.innerHTML = c + p;
    }
}