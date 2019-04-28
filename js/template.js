function taskTemplate(el){
    var $list = document.querySelector('.todo-list');

    var li = document.createElement('li');
    var check = document.createElement('input');
    var name = document.createElement('span');
    var del = document.createElement('a');

    check.setAttribute('type', 'checkbox');
    check.addEventListener('change', controller.done);
    li.classList.add('task');
    name.classList.add('task-name');
    name.append(el.name);
    del.innerHTML = '<a class="fa fa-trash"></a>';
    del.setAttribute('href', '#');
    del.addEventListener('click', controller.deleteTask);
    li.append(check);
    li.append(name);
    li.append(del)
    $list.append(li);

}