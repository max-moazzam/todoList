//Version 8

var todoList = {
	todos: [],
	displayTodos: function() {
		console.log('My Todos:')
		if (this.todos.length === 0) {
			console.log('Your todos list is empty!');
		} else {
			for (var i = 0; i < this.todos.length; i++){
				if(this.todos[i].completed === true){
					var completionText = '(X)';
				}
				else {
					var completionText = '( )';
				}
				console.log(completionText,this.todos[i].todoText);
			}
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position,1);
		this.displayTodos();
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	toggleAll: function() {

		var todosCount = this.todos.length;
		var completedTodosCount = 0;
		
		for (var i = 0; i < this.todos.length; i++) {
			if (this.todos[i].completed === true) {
				completedTodosCount++;
			}
		}

		if (todosCount === completedTodosCount) {
			for (var i = 0; i < this.todos.length; i++) {
				this.todos[i].completed = false;
			}
		}
		else {
			for (var i = 0; i < this.todos.length; i++) {
				this.todos[i].completed = true;
			}
		}

		this.displayTodos();
	}
};

var handlers = {
  displayTodos: function() {
	  todoList.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};