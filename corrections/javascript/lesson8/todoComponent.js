var todoComponent = {
  props: ['todo'],
  computed: {
    done: function() {
      return this.todo.state === 1;
    }
  },
  template: `
  <div class="todo" :class="{ done: done }">
     <p>{{ todo.content }}</p>
     <button class="btn btn-blue" @click="archiveTodo">Archive</button>
     <button class="btn btn-red" @click="deleteTodo">Delete</button>
     <button class="btn btn-orange" v-if="done" @click="markAsUndone">Mark as Undone</button>
     <button class="btn btn-green" v-else @click="markAsDone">Mark as Done</button>
  </div>
  `,
  methods: {
    markAsDone: function() {
      this.todo.markAsDone();
    },
    markAsUndone: function() {
      this.todo.markAsUndone();
    },
    deleteTodo: function() {
      var isOk = confirm('Do you really want to archive this todo ?');
      if (isOk) {
        this.$emit('delete', this.todo.id);
      }
    },
    archiveTodo: function() {
      var isOk = confirm('Do you really want to archive this todo ?');
      if (isOk) {
        this.$emit('archive', this.todo.id);
      }
    }
  }
}
