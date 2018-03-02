var _todoId = 0;

function newTodo(obj) {
  _todoId++;
  return {
    id: _todoId - 1,
    content: obj.content,
    title: obj.title,
    /* states :
       0 : created
       1 : done
     */
    state: 0,
    markAsDone: function() {
      this.state = 1;
    },
    markAsUndone: function() {
      this.state = 0;
    }
  }
}
