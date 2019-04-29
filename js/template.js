function taskTemplate(el){
    var $list = document.querySelector('.todo-list'),
        li = document.createElement('li'),
        check = document.createElement('input'),
        name = document.createElement('span'),
        del = document.createElement('a');

    check.setAttribute('type', 'checkbox');
    check.addEventListener('change', controller.done);
    li.classList.add('task');
    name.classList.add('task-name');
    name.append(el.name);
    del.innerHTML = '<a class="fa fa-trash"></a>';
    del.setAttribute('href', '#');
    del.addEventListener('click', controller.deleteTask);

    if(controller.isComplete(el)){
        li.classList.add('done');
        check.setAttribute('checked', 'true');
    }

    li.append(check);
    li.append(name);
    li.append(del);

    $list.append(li);

}