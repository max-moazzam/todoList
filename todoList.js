//Version 7
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

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function(){
	todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function(){
	todoList.toggleAll();
});
