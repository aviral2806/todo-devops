package com.aviral28.todo_backend.todo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class TodoRepository {
	public TodoRepository() {
		super();
	}
	static private List<Todo> todos = new ArrayList<>();
	static int todoNum = 3;
	static {
		todos.add(new Todo(1,"Try","try desc",false));
		todos.add(new Todo(2,"Try1","try4 desc",false));
		todos.add(new Todo(3,"Try2","try3 desc",true));
	}
	public List<Todo> getAllTodos(){
		return todos;
	}
	public Todo addTodo(Todo todo) {
		Todo todo2 = new Todo(++todoNum,todo.getTaskName(),todo.getTaskDescription(),todo.isDone());
		todos.add(todo2);
		return todo2;
	}
	public Todo updTodo(int id,Todo todo) {
		for (int i = 0; i < todos.size(); i++) {
	        if (todos.get(i).getId() == id) {
	            todos.set(i, todo);
	            return todo;
	        }
	    }
	    return null;
	}
	public Todo toggleDone(int id) {
		// TODO Auto-generated method stub
		for(Todo todo : todos) {
			if(todo.getId()==id) {
				todo.setDone(!todo.isDone());
				return todo;
			}
		}
		return null;
	}
	
	public boolean deleteTodo(int id) {
		return todos.removeIf(todo -> todo.getId()==id);
	}
}
