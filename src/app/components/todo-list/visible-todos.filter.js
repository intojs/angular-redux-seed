var visibleTodosFilter = function() {

    return function(todos, filter) {

        switch (filter) {
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed);
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed);
            case 'SHOW_ALL':
            default:
                return todos;
        }
    }
}

visibleTodosFilter.$inject = [];

export default visibleTodosFilter;
