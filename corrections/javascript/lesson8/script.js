var test = new Vue({
  el: '#app',
  data: function() {
    return {
      newTodo: '',
      todos: [],
      archivedTodos: []
    }
  },
  created: function() {
    this.retrieveData();
    if (!Array.isArray(this.todos)) {
      this.todos = [];
    }
    if (!Array.isArray(this.archivedTodos)) {
      this.archivedTodos = [];
    }
  },
  methods: {
    storeAll: function() {
      window.localStorage.setItem('todos', JSON.stringify(this.todos));
      window.localStorage.setItem('archivedTodos', JSON.stringify(this.archivedTodos));
    },
    storeTodos: function() {
      window.localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    storeArchivedTodos: function() {
      window.localStorage.setItem('archivedTodos', JSON.stringify(this.archivedTodos));
    },
    retrieveData: function() {
      this.todos = JSON.parse(window.localStorage.getItem('todos'));
      this.archivedTodos = JSON.parse(window.localStorage.getItem('archivedTodos'));
    },
    getTodoIndex: function(todoId) {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id === todoId) {
          return i;
        }
      }
    },
    addTodo: function() {
      /* Check that the new todo has a long title */
      if (this.newTodo.length > 0) {
        /* create new todo */
        var t = newTodo({
          content: this.newTodo
        });
        /* add it to the todoList */
        this.todos.push(t);
        /* reset todoText */
        this.newTodo = '';
        this.storeAll();
      }
    },
    /* todoId is the id to be archived */
    arc: function(todoId) {
      /* find the todo */
      var i = this.getTodoIndex(todoId);
      /* add it to archived */
      this.archivedTodos.push(this.todos[i]);
      /* delete it from the todos */
      this.todos.splice(i, 1);
      this.storeAll();
    },
    dlt: function(todoId) {
      /* find the todo */
      var i = this.getTodoIndex(todoId);
      /* delete it from the todos */
      this.todos.splice(i, 1);
      this.storeAll();
    }
  },
  components: {
    todo: todoComponent,
    aTodo: archivedTodoComponent
  }
});
